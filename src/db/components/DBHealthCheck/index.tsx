import { drizzleHealthCheck, sqliteHealthCheck } from "@/db/health-check";
import { Center, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

type HealthStatusMessage =
  | "checking..."
  | "healthy"
  | "both of DB and ORM are unhealthy"
  | "ORM is unhealthy"
  | "DB is unhealthy"
  | "something went wrong";

/**
 * Component just to check if the database is healthy
 * @returns JSX.Element
 */
export function DBHealthCheck() {
  const [isDBHealth, setIsDBHealth] = useState(false);
  const [isORMHealth, setIsORMHealth] = useState(false);
  const [message, setMessage] = useState<HealthStatusMessage>("checking...");

  useEffect(() => {
    const healthCheck = async () => {
      await sqliteHealthCheck().then((sqliteHealth) => {
        setIsDBHealth((_prev) => sqliteHealth);
      });
      await drizzleHealthCheck().then((ormHealth) => {
        setIsORMHealth((_prev) => ormHealth);
      });
    };
    healthCheck();
  }, []);

  useEffect(() => {
    setMessage((_prev) => healthStatusMessage(isDBHealth, isORMHealth));
  }, [isDBHealth, isORMHealth]);

  const healthStatusMessage = (
    isDBHealth: boolean,
    isORMHealth: boolean,
  ): HealthStatusMessage => {
    if (isDBHealth && isORMHealth) return "healthy";
    if (!(isDBHealth || isORMHealth)) return "both of DB and ORM are unhealthy";
    if (!isDBHealth && isORMHealth) return "DB is unhealthy";
    if (isDBHealth && !isORMHealth) return "ORM is unhealthy";
    return "something went wrong";
  };

  // health check
  return (
    <Center>
      <Text color="$white">{isDBHealth ? message : "checking..."}</Text>
    </Center>
  );
}
