//All related to artists in the database
import { db } from './index';
import { artists } from './schema';

type Artist = typeof artists.$inferSelect;

export async function getArtists(): Promise<Artist[]> {
	return await db.select().from(artists);
}
