import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { pendingArtists } from '$lib/server/db/schema';
import { Resend } from 'resend';
import { RESEND_API_KEY, EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

async function sendEmail(from: string) {
	try {
		console.log('Sending email from:', from);
		const { data, error } = await resend.emails.send({
			from: 'noreply@rafacanosa.dev',
			to: [EMAIL],
			subject: 'New Contributor Registered | thisisnotai.xyz',
			html: `<p>A new contributor ${from} has been registered to add his art into thisisnotai.xyz, check it out!</p>`
		});
		console.log('Resend response:', { data, error });

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error: 'Email sending failed' }, { status: 500 });
	}
}

export const actions = {
	// add user to the pending list
	register: async (event) => {
		const formData = await event.request.formData();

		const email = formData.get('email');
		if (typeof email !== 'string' || !email.includes('@')) {
			return fail(422, {
				description: 'Invalid email address',
				error: 'Please provide a valid email address.'
			});
		}

		const type = formData.get('type');
		const username = formData.get('name');
		const bio = formData.get('bio');

		if (!type || !email || !username) {
			return fail(422, {
				description: 'Email, Username and role are required',
				error: 'Please provide a valid role and email.'
			});
		}

		// insert in the database
		const request = await db.insert(pendingArtists).values({
			id: crypto.randomUUID(),
			username: username,
			email: email,
			status: 'pending',
			bio: bio ? String(bio) : null,
			category: type,
			created_at: new Date()
		});

		if (!request.rowsAffected) {
			return fail(500, {
				description: 'Database error',
				error: 'Could not register to the waitlist. Please try again later.'
			});
		}

		try {
			await sendEmail(email);
		} catch (err) {
			return fail(500, {
				description: 'Email error',
				error: 'Could not send notification email.'
			});
		}
	}
} satisfies Actions;
