CREATE TABLE `albums` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`date_added` integer DEFAULT ((unixepoch())) NOT NULL,
	`cover_photo_path` text,
	`description` text,
	`latitude` real,
	`longitude` real,
	FOREIGN KEY (`cover_photo_path`) REFERENCES `photos`(`path`) ON UPDATE cascade ON DELETE set null,
	CONSTRAINT "album_coordinates_check" CHECK(
      ("albums"."latitude" IS NULL AND "albums"."longitude" IS NULL) OR
      (
        ("albums"."latitude" IS NOT NULL AND "albums"."longitude" IS NOT NULL)
        AND "albums"."latitude" BETWEEN -90.0 AND 90.0
        AND "albums"."longitude" BETWEEN -180.0 AND 180.0
      )
    )
);
--> statement-breakpoint
CREATE UNIQUE INDEX `albums_name_unique` ON `albums` (`name`);--> statement-breakpoint
CREATE TABLE `photos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`path` text NOT NULL,
	`width` integer NOT NULL,
	`height` integer NOT NULL,
	`date_added` integer DEFAULT (unixepoch()) NOT NULL,
	`date_taken` integer,
	`rating` real,
	`view_count` integer DEFAULT 0 NOT NULL,
	`alt_text` text,
	`latitude` real,
	`longitude` real,
	CONSTRAINT "rating_check" CHECK("photos"."rating" BETWEEN 0.0 AND 5.0),
	CONSTRAINT "photo_coordinates_check" CHECK(
      ("photos"."latitude" IS NULL AND "photos"."longitude" IS NULL) OR
      (
        ("photos"."latitude" IS NOT NULL AND "photos"."longitude" IS NOT NULL)
        AND "photos"."latitude" BETWEEN -90.0 AND 90.0
        AND "photos"."longitude" BETWEEN -180.0 AND 180.0
      )
    )
);
--> statement-breakpoint
CREATE UNIQUE INDEX `photos_path_unique` ON `photos` (`path`);--> statement-breakpoint
CREATE TABLE `photos_to_album` (
	`photo_id` integer NOT NULL,
	`album_id` integer NOT NULL,
	PRIMARY KEY(`album_id`, `photo_id`),
	FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`album_id`) REFERENCES `albums`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `photo_to_album_photo_idx` ON `photos_to_album` (`photo_id`);