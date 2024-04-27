import {
  Button,
  ButtonText,
  FavouriteIcon,
  HStack,
  Icon,
} from "@gluestack-ui/themed";
import { useColorThemeAtom } from "~/src/atom";
import { getThemeOneColor } from "~/src/utils";
import { useFindButton } from "../../hooks";

export function FindButton() {
  const { handlePress } = useFindButton();
  const { colorTheme } = useColorThemeAtom();
  const backgroundColor = getThemeOneColor(colorTheme);

  return (
    <Button
      onPress={handlePress}
      width="$56"
      height="$12"
      borderRadius="$full"
      backgroundColor={backgroundColor}
    >
      <HStack gap="$4">
        <Icon as={FavouriteIcon} size="xl" color="$white" />
        <ButtonText textAlign="center">PICKする</ButtonText>
      </HStack>
    </Button>
  );
}
