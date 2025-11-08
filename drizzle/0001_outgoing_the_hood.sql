CREATE TABLE `artists` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text,
	`display_name` text NOT NULL,
	`bio` text,
	`avatar_url` text,
	`cover_image_url` text,
	`location` text,
	`category` text NOT NULL,
	`open_for_commissions` integer DEFAULT false,
	`created_at` integer NOT NULL,
	`social_links` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `artists_username_unique` ON `artists` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `artists_email_unique` ON `artists` (`email`);