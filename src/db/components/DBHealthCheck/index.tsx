import { useEffect, useState } from "react";

import { Center, Text } from "@gluestack-ui/themed";
import { healthCheck } from "../../utils";

/**
 * Component just to check if the database is healthy
 * @returns JSX.Element
 */
export function DBHealthCheck() {
  const [isDbHealth, setIsDbHealth] = useState(false);
  const [message, setMessage] = useState<"healthy" | "unhealthy">("unhealthy");

  useEffect(() => {
    healthCheck().then((result) => {
      setIsDbHealth(result);
      if (result) setMessage("healthy");
    });
  }, []);

  // health check
  return (
    <Center>
      <Text color="$white">{isDbHealth ? message : "checking..."}</Text>
    </Center>
  );
}
