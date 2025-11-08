import { getArtists } from '$lib/server/db/artists';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		artists: await getArtists()
	};
};
