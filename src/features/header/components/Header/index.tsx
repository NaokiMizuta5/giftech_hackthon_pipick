import { LinearGradient } from "@/components";
import {
  Box,
  Button,
  ChevronLeftIcon,
  HStack,
  Icon,
  MenuIcon,
  SafeAreaView,
  Text,
} from "@gluestack-ui/themed";

import { useColorThemeAtom } from "@/atom";
import { type CharacterId, useCharactersInfoAtom } from "@/features/character";
import type { Color } from "~/src/utils";
import { useHeaderAtom } from "../../atom";

export function Header() {
  const { menuItems, activateMenu } = useHeaderAtom();
  const { colorTheme, setSelectedColorTheme } = useColorThemeAtom();
  const { getCharacterIdByEnCharacterName, setCurrentCharacterId } =
    useCharactersInfoAtom();

  const handlePressButton = ({
    color,
    itemId,
    characterId,
  }: {
    color: Color;
    itemId: string;
    characterId: CharacterId | undefined;
  }) => {
    setSelectedColorTheme(color);
    if (characterId) {
      setCurrentCharacterId(characterId);
    }
    activateMenu(itemId);
  };

  return (
    <Box bgColor="$black" width="$full">
      <LinearGradient
        color={colorTheme}
        height="$24"
        width="$full"
        borderBottomLeftRadius="$3xl"
        borderBottomRightRadius="$3xl"
      >
        <SafeAreaView>
          <Box
            display="flex"
            flexDirection="column-reverse"
            height="$full"
            paddingBottom="$4"
          >
            <HStack
              justifyContent="space-between"
              alignItems="center"
              paddingLeft="$4"
              paddingRight="$4"
            >
              <Icon as={ChevronLeftIcon} color="$white" size="xl" />
              <HStack gap="$2" alignItems="center">
                {menuItems.map((item) => {
                  const characterId = getCharacterIdByEnCharacterName(
                    item.enCharacterName,
                  );
                  return (
                    <Button
                      key={item.id}
                      onPress={() =>
                        handlePressButton({
                          color: item.color,
                          itemId: item.id,
                          characterId: characterId,
                        })
                      }
                      paddingHorizontal="$4"
                      {...(item.active
                        ? {
                            backgroundColor: "$white",
                            borderRadius: "$3xl",
                          }
                        : {
                            backgroundColor: "transparent",
                          })}
                    >
                      <Text
                        color={item.active ? "$black " : "$white"}
                        fontSize="$sm"
                        fontWeight="$bold"
                      >
                        {item.label}
                      </Text>
                    </Button>
                  );
                })}
              </HStack>
              <Icon as={MenuIcon} color="$white" size="xl" />
            </HStack>
          </Box>
        </SafeAreaView>
      </LinearGradient>
    </Box>
  );
}
