import { Box, Icon, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { List } from "lucide-react-native";
import { useListButton } from "../../hooks";

export function ListButton() {
  const { handlePress } = useListButton();

  return (
    <Pressable onPress={handlePress}>
      <Box>
        <VStack alignItems="center">
          <Icon as={List} size="xl" color="$white" />
          <Text textAlign="center" color="$white" size="xs">
            リスト
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
}
