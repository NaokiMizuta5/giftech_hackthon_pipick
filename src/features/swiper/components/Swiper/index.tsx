import {
  Box,
  Button,
  CloseIcon,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed/build/components/Badge/styled-components";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { TinderCard } from "rn-tinder-card";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";
import type { PlaceInfo } from "../../../placeInfo/types";

export function Swiper() {
  const { placeInfoList } = usePlaceInfoAtom();
  //タグに表示する情報を指定できる。今回はジャンル、都道府県、場所、最寄り駅、距離。可変。
  const _tagLabels: (keyof PlaceInfo)[] = [
    "genre",
    "prefecture",
    "place",
    "station",
    "distance",
  ];
  const OverlayRight = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius="$xl"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$green"
      >
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          Like
        </Text>
      </Box>
    );
  };
  const OverlayLeft = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius="$xl"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$red"
      >
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          Nope
        </Text>
      </Box>
    );
  };
  const _TagText = ({ children }: { children: React.ReactNode }) => {
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

  const [visible, setVisible] = React.useState(false);

  const handlePress = () => {
    setVisible(true);
  };

  return (
    <Box flex={1}>
      {placeInfoList.map((item) => {
        return (
          <Pressable onPress={handlePress} key={`${item.index}-${item.img}`}>
            <Box pointerEvents="box-none">
              <TinderCard
                cardWidth={320}
                cardHeight={500}
                OverlayLabelRight={OverlayRight}
                OverlayLabelLeft={OverlayLeft}
                cardStyle={styles.card}
                onSwipedRight={() => {}}
                onSwipedLeft={() => {}}
              >
                {/* 表示する画像 */}
                <Image alt="swiper" source={item.img} style={styles.image} />
                <Box style={styles.detailInfoBox}>
                  <Text fontSize="$xl" fontWeight="bold" color="white" mt={15}>
                    {item.placeName}
                  </Text>
                  <VStack>
                    {/* タグ関連 */}
                    {/* <HStack
                      flexWrap="wrap"
                      justifyContent="center"
                      borderRadius={20}
                      mt={5}
                      mb={5}
                    >
                      {tagLabels
                        .filter((label) => label !== "img")
                        .map((label) => (
                          <TagText key={label}>
                            {placeInfo[label] as keyof PlaceInfo}
                          </TagText>
                        ))}
                    </HStack> */}
                    {/* 詳細を見るボタン */}
                    <Button
                      backgroundColor="rgba(0, 0, 0, 0)"
                      borderRadius={20}
                      width={280}
                      height={50}
                      onPress={() => {}}
                    >
                      <Image
                        source={require("../../Images/detailMark.png")}
                        style={{
                          width: 20, // 幅を小さくするための値を指定
                          height: 20, // 高さを小さくするための値を指定
                        }}
                      />
                      <Text color="white"> 詳細を見る</Text>
                    </Button>
                  </VStack>
                </Box>
              </TinderCard>
            </Box>
          </Pressable>
        );
      })}
      <Modal isOpen={visible} onClose={() => setVisible(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">header</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, nisl nec vestibulum commodo, mauris nisl efficitur
              libero, id ultricies mi nisl nec purus. Nullam sit amet
              sollicitudin libero, sit amet ultricies elit. Nullam euismod
              tincidunt orci, ut vehicula libero. Nullam sit amet sollicitudin
              libero, sit amet ultricies elit. Nullam euismod tincidunt orci, ut
              vehicula libero.
            </Text>
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
  detailInfoBox: {
    position: "absolute",
    top: "60%",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 48,
    backgroundColor: "rgba(0, 0, 0, 0.5)", //黒色の50%透明度
    justifyContent: "center",
    alignItems: "center",
  },
});
