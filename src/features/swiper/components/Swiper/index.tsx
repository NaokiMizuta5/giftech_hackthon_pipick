import { getThemeOneColor } from "@/utils";
import {
  Box,
  CloseIcon,
  HStack,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed/build/components/Badge/styled-components";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { TinderCard } from "rn-tinder-card";
import { useColorThemeAtom } from "~/src/atom";
import type { SuggestData } from "~/src/atom/suggest/types";
import { PAGE_HEIGHT, PAGE_WIDTH } from "~/src/constants";
import type { Character } from "~/src/features/character";
import { PlaceDetail } from "~/src/features/placeDetail";

const TagText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      backgroundColor="rgba(255, 255, 255, 0.75)"
      margin={3}
      padding={5}
      borderRadius={20}
    >
      <Text color="black">{children}</Text>
    </Box>
  );
};

type Props = {
  character: Character;
  suggestData: SuggestData[];
  addFavoriteData: (suggestData: SuggestData) => void;
};

export function Swiper({ character, suggestData, addFavoriteData }: Props) {
  const { colorTheme } = useColorThemeAtom();
  const backgroundColor = getThemeOneColor(colorTheme);
  const OverlayRight = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius={48}
        justifyContent="center"
        alignItems="center"
        backgroundColor={backgroundColor}
      >
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          PICK
        </Text>
      </Box>
    );
  };
  const OverlayLeft = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius={48}
        justifyContent="center"
        alignItems="center"
        backgroundColor="$gray"
      >
        <Text color="$black" fontWeight="$bold" fontSize="$xl">
          SKIP
        </Text>
      </Box>
    );
  };

  const [visible, setVisible] = React.useState(false);
  const [selectedPlaceIndex, setSelectedPlaceIndex] = React.useState(0);

  const handlePress = (index: number) => () => {
    setSelectedPlaceIndex(index); //indexを元に、、詳細情報を取得する。
    setVisible(true);
  };

  return (
    <Box flex={1}>
      {suggestData.map((item) => {
        return (
          <Pressable
            onPress={handlePress(item.index)}
            key={`${item.index}-${item.img}`}
          >
            <Box pointerEvents="box-none">
              <TinderCard
                cardWidth={PAGE_WIDTH * 0.85}
                cardHeight={PAGE_HEIGHT * 0.72}
                OverlayLabelRight={OverlayRight}
                OverlayLabelLeft={OverlayLeft}
                cardStyle={styles.card}
                onSwipedRight={() => addFavoriteData(item)}
                onSwipedLeft={() => {}}
              >
                {/* 表示する画像 */}
                <Image alt="swiper" source={item.img} style={styles.image} />
                <Box style={styles.infoBox}>
                  <Text
                    fontSize="$xl"
                    fontWeight="bold"
                    color="white"
                    mt={15}
                    width="90%"
                    textAlign="center"
                  >
                    {item.placeName}
                  </Text>
                  <HStack
                    flexWrap="wrap"
                    justifyContent="center"
                    borderRadius={20}
                    mt={5}
                    mb={5}
                  >
                    {item.tags.map((tag) => {
                      if (!tag) return;
                      return (
                        <TagText key={`${item.index}-${tag}`}>{tag}</TagText>
                      );
                    })}
                  </HStack>
                </Box>
              </TinderCard>
            </Box>
          </Pressable>
        );
      })}
      <Modal isOpen={visible} onClose={() => setVisible(false)}>
        <ModalBackdrop />
        <ModalContent bgColor="black" width="80%" height="70%">
          <ModalHeader>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <PlaceDetail
              character={character}
              suggestData={suggestData}
              index={selectedPlaceIndex}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 48,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayLabelText: { color: "white", fontSize: 32, fontWeight: "bold" },
  infoBox: {
    position: "absolute",
    top: "75%",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 48,
    backgroundColor: "rgba(0, 0, 0, 0.5)", //黒色の50%透明度
    justifyContent: "center",
    alignItems: "center",
  },
});
