import { useColorThemeAtom } from "@/atom";
import { getThemeOneColor } from "@/utils";
import { Box, Icon, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Heart, RotateCcw } from "lucide-react-native";

type Props = {
  type: "skip" | "favorite";
};

export function IconButton({ type }: Props) {
  const { colorTheme } = useColorThemeAtom();
  const color = getThemeOneColor(colorTheme);
  const iconColor = type === "skip" ? color : "#fff";
  const backgroundColor = type === "skip" ? "#fff" : color;
  // const {  } = useIconButton();
  // const {
  //   count: atomCount,
  // } = useIconButtonAtom();
  const icon = type === "skip" ? RotateCcw : Heart;
  const text = type === "skip" ? "スキップ" : "気になる";

  return (
    <Pressable>
      <VStack alignItems="center" gap="$1">
        <Box
          borderRadius="$full"
          backgroundColor={backgroundColor}
          height="$16"
          width="$16"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} size="xl" color={iconColor} />
        </Box>
        <Text
          textAlign="center"
          color="$white"
          fontWeight="$bold"
          fontSize="$sm"
        >
          {text}
        </Text>
      </VStack>
    </Pressable>
  );
}
