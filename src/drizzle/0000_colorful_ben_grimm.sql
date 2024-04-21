CREATE TABLE `concierges` (
	`id` integer PRIMARY KEY NOT NULL,
	`en_name` text NOT NULL,
	`ja_name` text NOT NULL,
	`level` integer NOT NULL,
	`current_exp` integer NOT NULL,
	`required_exp` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIME NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIME NOT NULL
);
--> statement-breakpoint
CREATE TABLE `suggestion_ids` (
	`id` integer PRIMARY KEY NOT NULL,
	`yolp_uid` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIME NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIME NOT NULL
);
--> statement-breakpoint
CREATE TABLE `suggestions` (
	`id` integer PRIMARY KEY NOT NULL,
	`yolp_uid` text NOT NULL,
	`domain_type` text NOT NULL,
	`state` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIME NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIME NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `suggestion_ids_yolp_uid_idx` ON `suggestion_ids` (`yolp_uid`);--> statement-breakpoint
CREATE UNIQUE INDEX `suggestion_yolp_uid_idx` ON `suggestions` (`yolp_uid`);--> statement-breakpoint
CREATE UNIQUE INDEX `suggestion_domain_type_idx` ON `suggestions` (`domain_type`);--> statement-breakpoint
CREATE UNIQUE INDEX `suggestion_state_idx` ON `suggestions` (`state`);