import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import type { ImageSourcePropType } from "react-native";
import { Linking } from "react-native";
import { useCharactersInfoAtom } from "../../../character/atom";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";

export function PlaceDetail({ index }: { index: number }) {
  // const {  } = usePlaceDetail();
  // const {
  //   count: atomCount,
  // } = usePlaceDetailAtom();
  const { placeInfoList } = usePlaceInfoAtom();
  const { img, placeName, detail } = placeInfoList[index];

  //ジャンルに応じてキャラクター画像を変更
  const { currentCharacterId } = useCharactersInfoAtom();
  const [characterImg, setCharacterImg] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  useEffect(() => {
    // currentCharacterId の値に応じて画像を設定
    if (currentCharacterId === "1") {
      setCharacterImg(require("~/assets/images/MeikaFace.png"));
    } else if (currentCharacterId === "2") {
      setCharacterImg(require("~/assets/images/AbbieFace.png"));
    } else if (currentCharacterId === "3") {
      setCharacterImg(require("~/assets/images/CooFace.png"));
    } else {
      setCharacterImg(require("~/assets/images/MirukiFace.png"));
    }
  }, [currentCharacterId]);

  if (!img) {
    return <Text textAlign="center">Please Swipe!</Text>;
  }

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("リンクを開けませんでした。", err),
    );
  };

  return (
    <Box>
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
          <Image source={img} width={200} height={200} borderRadius={10} />
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
              {Array.from({ length: value }).map(() => (
                <Text
                  key={key}
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
            {characterImg === undefined ? (
              <Image
                source={require("~/assets/images/AbbieFace.png")}
                width={50}
                height={50}
                marginLeft={10}
              />
            ) : (
              <Image
                source={characterImg}
                width={50}
                height={50}
                marginLeft={10}
              />
            )}
            <Box
              bgColor="#464646"
              justifyContent="center"
              alignItems="center"
              width="75%"
              marginLeft={10}
              borderRadius={10}
            >
              <Text color="white" textAlign="center" width="80%">
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
