import { isSameObj } from "@/utils";
import { sql } from "drizzle-orm";
import { getDBClientAsync } from "../..";
import type { CanConnectToDB } from "../types";

const healthCheck = async (): CanConnectToDB => {
  const worksAsExpected = await canConnectToDB();
  if (!worksAsExpected) {
    console.error("Error in ORM connection check");
    throw new Error("something went wrong with ORM connection");
  }
  return true;
};

const canConnectToDB = async (): CanConnectToDB => {
  const client = await getDBClientAsync();
  const statement = sql`SELECT 1`;
  const result = client.run(statement); // execute run() synchronously
  const expected = { changes: 0, lastInsertRowId: 0 };
  return isSameObj(result, expected);
};

export default healthCheck;
