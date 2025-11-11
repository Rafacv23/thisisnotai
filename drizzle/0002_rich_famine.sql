CREATE TABLE `pendingArtists` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`bio` text,
	`category` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pendingArtists_username_unique` ON `pendingArtists` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `pendingArtists_email_unique` ON `pendingArtists` (`email`);--> statement-breakpoint
ALTER TABLE `artists` DROP COLUMN `cover_image_url`;