import  { useEffect, useState } from "react";

import { Center, Text } from "@gluestack-ui/themed";
import { healthCheck } from "~/src/db/health-check";

/**
 * Component just to check if the database is healthy
 * @returns JSX.Element
 */
export function DBHealthCheck(): JSX.Element {
    const [db_health, setDbHealth] = useState('checking...');

    useEffect(() => {
        healthCheck().then((result) => {
            setDbHealth(result ? 'healthy' : 'unhealthy');
        });
    }
    , []);

    // health check
    return (
        <Center height="$full" width="$full">
            <Text color="$white">Database is {db_health}</Text>
        </Center>
    )
}
