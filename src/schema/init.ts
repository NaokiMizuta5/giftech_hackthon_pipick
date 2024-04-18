import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sampleTable = sqliteTable("sample_table", {
  id: integer("id").primaryKey(),
  text: text("text"),
});
