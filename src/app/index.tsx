import { DBHealthCheck } from "@/db/components";
import { Box, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { Counter } from "../features/counter";

export default function Home() {
  return (
    <Box flex={1} backgroundColor="$black" paddingVertical="$8">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <VStack gap="$8">
          <DBHealthCheck />
          <Box>
            <Text textAlign="center">Counter 1</Text>
            <Counter />
          </Box>
          <Box>
            <Text textAlign="center">Counter 2</Text>
            <Counter />
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}
