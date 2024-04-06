import { Box, ScrollView } from "@gluestack-ui/themed";
import { Counter } from "../features/counter";

export default function Home() {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <Counter />
    </Box>
  );
}
