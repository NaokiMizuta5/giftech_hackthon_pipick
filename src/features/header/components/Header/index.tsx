import { LinearGradient } from "@/components";
import {
  Box,
  Button,
  ChevronLeftIcon,
  HStack,
  Icon,
  SafeAreaView,
  Text,
} from "@gluestack-ui/themed";
import { List } from "lucide-react-native";

import { useColorThemeAtom } from "@/atom";
import { type CharacterId, useCharactersInfoAtom } from "@/features/character";
import { useRoutePathAtom } from "@/features/routePath";
import { Pressable } from "react-native";
import type { Color } from "~/src/utils";
import { useHeaderAtom } from "../../atom";

export function Header() {
  const { menuItems, renderListMenuItems, activateMenu, acvivateListMenu } =
    useHeaderAtom();
  const { colorTheme, setSelectedColorTheme } = useColorThemeAtom();
  const { getCharacterIdByEnCharacterName, setCurrentCharacterId } =
    useCharactersInfoAtom();
  const { isHomePath, isListPath, lazyRouterPush } = useRoutePathAtom();

  const renderMenuItems = menuItems.filter((item) => {
    return isHomePath ? true : item.active;
  });

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
              {!isHomePath && (
                <Pressable onPress={() => lazyRouterPush("home")}>
                  <Icon as={ChevronLeftIcon} color="$white" size="xl" />
                </Pressable>
              )}
              <HStack
                alignItems="center"
                marginLeft="$4"
                gap="$1"
                overflow="scroll"
              >
                {isListPath
                  ? renderListMenuItems.map(
                      (item) =>
                        item && (
                          <Button
                            key={item.id}
                            onPress={() => acvivateListMenu(item.id)}
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
                              color={item.active ? "$black" : "$white"}
                              fontSize="$sm"
                              fontWeight="$bold"
                            >
                              {item.label}
                            </Text>
                          </Button>
                        ),
                    )
                  : renderMenuItems.map((item) => {
                      const characterId = getCharacterIdByEnCharacterName(
                        item.enCharacterName,
                      );
                      return (
                        <Button
                          key={`${item.id}-${item.enCharacterName}`}
                          onPress={() =>
                            handlePressButton({
                              color: item.color,
                              itemId: item.id,
                              characterId: characterId,
                            })
                          }
                          paddingHorizontal="$4"
                          {...(item.active && renderMenuItems.length > 1
                            ? {
                                backgroundColor: "$white",
                                borderRadius: "$3xl",
                              }
                            : {
                                backgroundColor: "transparent",
                              })}
                        >
                          <Text
                            color={
                              item.active && renderMenuItems.length > 1
                                ? "$black "
                                : "$white"
                            }
                            fontSize="$sm"
                            fontWeight="$bold"
                          >
                            {item.label}
                          </Text>
                        </Button>
                      );
                    })}
              </HStack>
              <Pressable onPress={() => lazyRouterPush("list")}>
                <Icon
                  as={List}
                  color="$white"
                  size="xl"
                  opacity={isListPath ? 0 : 100}
                />
              </Pressable>
            </HStack>
          </Box>
        </SafeAreaView>
      </LinearGradient>
    </Box>
  );
}
