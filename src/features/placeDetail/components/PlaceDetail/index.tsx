import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useEffect } from "react";
import { Linking } from "react-native";
import type { Character } from "~/src/features/character";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";

type Props = {
  index: number;
  character: Character;
};

export function PlaceDetail({ index, character }: Props) {
  const { placeInfoList } = usePlaceInfoAtom();
  const { img, placeName, detail } = placeInfoList[index];

  //ジャンルに応じてキャラクター画像を変更
  if (!img) {
    return <Text textAlign="center">Please Swipe!</Text>;
  }

  useEffect(() => {});

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("リンクを開けませんでした。", err),
    );
  };

  return (
    <Box paddingBottom="$4">
      <VStack>
        <Box justifyContent="center" alignItems="center">
          <Text
            color="white"
            textAlign="center"
            fontWeight="$bold"
            fontSize={20}
            marginBottom="$4"
            width="80%"
          >
            {placeName}
          </Text>
          <Image
            alt="suggest contents"
            source={img}
            width={200}
            height={200}
            borderRadius={10}
          />
        </Box>
        <Box justifyContent="flex-start" alignItems="flex-start" marginTop="$4">
          {Object.entries(detail.star).map(([key, value]) => (
            <Text
              key={key}
              color="$white"
              textAlign="center"
              marginLeft={10}
              fontSize={18}
            >
              {key}:
              {Array.from({ length: value }).map((_, index) => (
                <Text
                  key={`${index}-${key}`}
                  color="$white"
                  textAlign="center"
                  marginLeft={10}
                  fontSize={18}
                >
                  ⭐️
                </Text>
              ))}
            </Text>
          ))}
        </Box>
        {/* コメントとキャラクター画像を表示 */}
        <Box marginTop="$5" marginBottom="$5">
          <HStack>
            {character && (
              <Image
                alt="character Abbie"
                source={
                  character.enName === "Meika"
                    ? require("~/assets/images/MeikaFace.png")
                    : character.enName === "Abbie"
                      ? require("~/assets/images/AbbieFace.png")
                      : character.enName === "Coo"
                        ? require("~/assets/images/CooFace.png")
                        : character.enName === "Milky"
                          ? require("~/assets/images/MilkyFace.png")
                          : null
                }
              />
            )}
            <Box
              bgColor="#464646"
              justifyContent="center"
              alignItems="center"
              width="65%"
              marginLeft={10}
              borderRadius={10}
            >
              <Text color="white" textAlign="left" width="80%">
                {detail.comment}
              </Text>
            </Box>
          </HStack>
        </Box>
        <Button
          alignSelf="center"
          bgColor="#00E0A3"
          borderRadius={10}
          marginTop={10}
          width="50%"
          onPress={() => handlePress(detail.GoogleUrl)}
        >
          <ButtonText>Webを見る</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
