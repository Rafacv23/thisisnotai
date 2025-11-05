import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// tables for waitlist, prerelease launch
export const waitlist = sqliteTable('waitlist', {
	id: text('id').primaryKey().notNull(),
	email: text('email').notNull().unique(),
	type: text('type').notNull(), // can be artist, developer interested in contribute, sponser etc.
	subscribet_at: integer('subscribet_at', { mode: 'timestamp' }).notNull(),
	notified: integer('notified', { mode: 'boolean' }).notNull().default(false)
});
