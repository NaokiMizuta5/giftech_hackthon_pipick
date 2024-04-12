import migrations from "@/drizzle/migrations";
import schema from "@/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { openDatabaseAsync, openDatabaseSync } from "expo-sqlite/next";

const getDBClientSync = () => {
  const dbName = process.env.EXPO_PUBLIC_DB || raiseDBNameError();
  const db = openDatabaseSync(dbName);
  return drizzle(db, { schema });
};

const getDBClientAsync = async () => {
  const dbName = process.env.EXPO_PUBLIC_DB || raiseDBNameError();
  const db = await openDatabaseAsync(dbName);
  return drizzle(db, { schema });
};

const initDB = (): void => {
  const db = getDBClientSync();
  useMigrations(db, migrations);
};

const raiseDBNameError = (): never => {
  throw new Error("DB_NAME environment variable is not set");
};

export { getDBClientSync, getDBClientAsync, initDB };
