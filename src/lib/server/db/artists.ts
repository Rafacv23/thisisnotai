//All related to artists in the database
import { eq } from 'drizzle-orm';
import { db } from './index';
import { artists } from './schema';

export type Artist = typeof artists.$inferSelect;

export async function getArtists(): Promise<Partial<Artist>[]> {
	return await db
		.select({
			username: artists.username,
			display_name: artists.display_name,
			bio: artists.bio,
			avatar_url: artists.avatar_url,
			category: artists.category,
			open_for_commissions: artists.open_for_commissions
		})
		.from(artists);
}

export async function getArtistByUsername(username: string): Promise<Partial<Artist | undefined>> {
	return await db
		.select({
			username: artists.username,
			display_name: artists.display_name,
			bio: artists.bio,
			avatar_url: artists.avatar_url,
			cover_image_url: artists.cover_image_url,
			location: artists.location,
			category: artists.category,
			open_for_commissions: artists.open_for_commissions,
			social_links: artists.social_links
		})
		.from(artists)
		.where(eq(artists.username, username))
		.limit(1)
		.then((results) => results[0]);
}
