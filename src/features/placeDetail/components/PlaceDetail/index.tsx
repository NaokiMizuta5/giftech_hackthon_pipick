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
import { StyleSheet } from "react-native";
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
        <Box style={styles.box1}>
          <Text style={styles.text1}>{placeName}</Text>
          <Image source={img} style={styles.image1} />
        </Box>
        <Box style={styles.box2}>
          {Object.entries(detail.star).map(([key, value]) => (
            <Text key={key} style={styles.text2}>
              {key}:
              {Array.from({ length: value }).map(() => (
                <Text key={key} style={styles.text2}>
                  ⭐️
                </Text>
              ))}
            </Text>
          ))}
        </Box>
        {/* コメントとキャラクター画像を表示 */}
        <Box style={styles.box3}>
          <HStack>
            {characterImg === undefined ? (
              <Image
                source={require("~/assets/images/AbbieFace.png")}
                style={styles.image2}
              />
            ) : (
              <Image source={characterImg} style={styles.image2} />
            )}
            <Box style={styles.box4}>
              <Text style={styles.text3}>{detail.comment}</Text>
            </Box>
          </HStack>
        </Box>
        <Button
          style={styles.button}
          onPress={() => handlePress(detail.GoogleUrl)}
        >
          <ButtonText>Webを見る</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  box1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  text1: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  image1: {
    width: "70%",
    height: "70%",
    borderRadius: 10,
  },
  box2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: -10,
    marginBottom: 10,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 10,
  },
  box3: {
    marginTop: 5,
    marginBottom: 5,
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  box4: {
    backgroundColor: "#464646",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    marginLeft: 10,
    borderRadius: 10,
  },
  text3: {
    color: "white",
    textAlign: "center",
    width: "80%",
  },
  button: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: "#00E0A3",
    borderRadius: 10,
    marginTop: 10,
  },
});
