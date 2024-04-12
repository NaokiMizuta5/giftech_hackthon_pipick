import migrations from "@/drizzle/migrations";
import schema from "@/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { openDatabaseSync } from "expo-sqlite/next";

const getDBClientSync = () => {
  const db = openDatabaseSync("process.env.DB_NAME");
  return drizzle(db, { schema });
};

const getDBClientAsync = async () => {
  const db = await openDatabaseSync("process.env.DB_NAME");
  return drizzle(db, { schema });
};

const initDB = (): void => {
  const db = getDBClientSync();
  useMigrations(db, migrations);
};

export { getDBClientSync, getDBClientAsync, initDB };
