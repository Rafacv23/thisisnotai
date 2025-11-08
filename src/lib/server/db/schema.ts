import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// tables for waitlist, prerelease launch
export const waitlist = sqliteTable('waitlist', {
	id: text('id').primaryKey().notNull(),
	email: text('email').notNull().unique(),
	type: text('type').notNull(), // can be artist, developer interested in contribute, sponser etc.
	subscribet_at: integer('subscribet_at', { mode: 'timestamp' }).notNull(),
	notified: integer('notified', { mode: 'boolean' }).notNull().default(false)
});

export const artists = sqliteTable('artists', {
	// Primary Key
	id: text('id').primaryKey(), // uuid

	// Basic Info
	username: text('username').notNull().unique(), // URL-friendly: "maria-gonzalez"
	email: text('email').unique(),
	display_name: text('display_name').notNull(), // "María González"

	// Profile
	bio: text('bio'), // Short bio (500 chars max recommended)
	avatar_url: text('avatar_url'), // Profile picture URL
	cover_image_url: text('cover_image_url'), // Banner/header image (optional)
	location: text('location'), // "Barcelona, Spain" (optional)
	category: text('category').notNull(), // Primary art category: "digital art", "photography", etc.
	open_for_commissions: integer('open_for_commissions', { mode: 'boolean' }).default(false),
	created_at: integer('created_at', { mode: 'timestamp' }).notNull(),

	// External Links (JSON for flexibility)
	social_links: text('social_links', { mode: 'json' }).$type<{
		facebook?: string;
		website?: string;
		instagram?: string;
		twitter?: string;
		tiktok?: string;
		youtube?: string;
		behance?: string;
		dribbble?: string;
		artstation?: string;
		github?: string;
		linkedin?: string;
		spotify?: string;
		soundcloud?: string;
		bandcamp?: string;
		etsy?: string;
		shop?: string; // Generic shop link
		other?: string;
	}>()
});
