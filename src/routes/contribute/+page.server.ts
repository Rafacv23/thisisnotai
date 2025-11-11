import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { pendingArtists } from '$lib/server/db/schema';

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
	}
} satisfies Actions;
