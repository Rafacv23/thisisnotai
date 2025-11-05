import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { waitlist } from '$lib/server/db/schema';

export const actions = {
	// subscribe to the waitlist
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

		if (!type || !email) {
			return fail(422, {
				description: 'Email and role are required',
				error: 'Please provide a valid role and email.'
			});
		}

		// insert in the database
		const request = await db.insert(waitlist).values({
			id: crypto.randomUUID(),
			email,
			type: typeof type === 'string' ? type : 'general',
			subscribet_at: new Date(),
			notified: false
		});

		if (!request.rowsAffected) {
			return fail(500, {
				description: 'Database error',
				error: 'Could not register to the waitlist. Please try again later.'
			});
		}
	}
} satisfies Actions;
