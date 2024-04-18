import type { Config } from "drizzle-kit";
export default {
  schema: "./src/schema/init.ts",
  out: "./src/drizzle",
  driver: "expo",
} satisfies Config;
