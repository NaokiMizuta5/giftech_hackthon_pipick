import { Box, ScrollView } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </Box>
  );
}
