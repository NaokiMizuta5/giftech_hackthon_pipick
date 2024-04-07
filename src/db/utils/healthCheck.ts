import * as SQLite from "expo-sqlite/next";

type CanConnectToDB = Promise<boolean>;

/**
 * Check if the local DB is working as expected
 * @returns {CanConnectToDB} - true if the DB is working as expected
 * @throws {Error} - if the DB is not working as expected
 */
export const healthCheck = async (): CanConnectToDB => {
  const worksAsExpected = await canConnectToDB();
  if (!worksAsExpected) {
    console.error("Error in health check");
    throw new Error("something went wrong with local DB");
  }
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log("DB health check passed");
  return true;
};

const canConnectToDB = async (): CanConnectToDB => {
  const db = await SQLite.openDatabaseAsync("health-check");
  const result = await db.getAllAsync("SELECT 1");
  await db.closeAsync();
  await SQLite.deleteDatabaseAsync("health-check");

  const expected = [{ 1: 1 }];
  const worksAsExpected = isSameObj(result, expected);
  if (!worksAsExpected) return false;
  return true;
};

const isSameObj = (obj1: object, obj2: object) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
