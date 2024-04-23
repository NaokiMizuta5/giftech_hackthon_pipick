import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

// NOTE: leveling logic is implemented in application layer
export const characters = sqliteTable("characters", {
  id: integer("id").primaryKey(),
  enName: text("en_name").notNull(),
  jaName: text("ja_name").notNull(),
  level: integer("level").notNull(),
  // It keeps increasing all the time.
  currentExp: integer("current_exp").notNull(),
  requiredExp: integer("required_exp").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIME`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIME`)
    .$onUpdate(() => sql`CURRENT_TIME`),
});

// store all of the suggestion ids that are fetched from YOLP API
export const suggestionIds = sqliteTable(
  "suggestion_ids",
  {
    id: integer("id").primaryKey(),
    yolpUid: text("yolp_uid").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIME`),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`CURRENT_TIME`)
      .$onUpdate(() => sql`CURRENT_TIME`),
  },
  (suggestionIds) => ({
    yolpUidIdx: uniqueIndex("suggestion_ids_yolp_uid_idx").on(
      suggestionIds.yolpUid,
    ),
  }),
);

// store only experienced and bookmarked suggestions
export const suggestions = sqliteTable(
  "suggestions",
  {
    id: integer("id").primaryKey(),
    yolpUid: text("yolp_uid").notNull(),
    // NOTE: 1: eat, 2: play, 3: make
    domainType: text("domain_type", {
      enum: ["eat", "play", "make"],
    }).notNull(),
    // NOTE: 1: experienced, 2: bookmarked
    state: text("state", { enum: ["experienced", "bookmarked"] }).notNull(),
    // TODO: define what properties from YOLP API response should be stored
    // TODO: implement
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIME`),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`CURRENT_TIME`)
      .$onUpdate(() => sql`CURRENT_TIME`),
  },
  (suggestions) => ({
    yolpUidIdx: uniqueIndex("suggestion_yolp_uid_idx").on(suggestions.yolpUid),
    domainTypeIdx: uniqueIndex("suggestion_domain_type_idx").on(
      suggestions.domainType,
    ),
    stateIdx: uniqueIndex("suggestion_state_idx").on(suggestions.state),
  }),
);
