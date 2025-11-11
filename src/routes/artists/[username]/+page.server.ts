import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getArtistByUsername } from '$lib/server/db/artists';

export const load: PageServerLoad = async ({ params }) => {
	const artist = await getArtistByUsername(params.username);

	if (artist) {
		return { artist };
	}

	error(404, 'Artist not found');
};
