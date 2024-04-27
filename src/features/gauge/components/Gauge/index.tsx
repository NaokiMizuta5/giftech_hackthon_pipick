import { useColorThemeAtom } from "@/atom";
import type { Character } from "@/features/character";
import { getThemeOneColor } from "@/utils";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Text,
  VStack,
} from "@gluestack-ui/themed";

type Props = {
  character: Character;
  withAvatar?: boolean;
};

export function Gauge({ character, withAvatar }: Props) {
  const { colorTheme } = useColorThemeAtom();
  const themeOneColor = getThemeOneColor(colorTheme);

  return (
    <Box>
      <HStack alignItems="center" gap="$2">
        {withAvatar && (
          <Avatar backgroundColor={themeOneColor}>
            <AvatarFallbackText>{character.enName}</AvatarFallbackText>
            {character.enName === "Meika" ? (
              <AvatarImage source={require("~/assets/images/MeikaFace.png")} />
            ) : character.enName === "Abbie" ? (
              <AvatarImage source={require("~/assets/images/AbbieFace.png")} />
            ) : character.enName === "Coo" ? (
              <AvatarImage source={require("~/assets/images/CooFace.png")} />
            ) : null}
          </Avatar>
        )}
        <VStack>
          <HStack
            gap="$2"
            {...(!withAvatar && {
              justifyContent: "center",
            })}
          >
            {withAvatar && (
              <Text color="$white" fontWeight="$bold">
                {character.jaName}
              </Text>
            )}
            <Text
              color="$white"
              fontWeight="$bold"
              {...(!withAvatar && {
                size: "xl",
              })}
            >
              Level {character.level}
            </Text>
          </HStack>
          <HStack gap="$2">
            <Slider
              size="lg"
              value={character.currentStep}
              width={withAvatar ? "$48" : "$56"}
              maxValue={character.requireNext}
            >
              <SliderTrack>
                <SliderFilledTrack backgroundColor={themeOneColor} />
              </SliderTrack>
            </Slider>
            <Text color="$white" fontWeight="$bold">
              {character.currentStep}/{character.requireNext}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
