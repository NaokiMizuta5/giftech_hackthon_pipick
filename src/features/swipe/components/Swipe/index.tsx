import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import type * as React from "react";
import { useCallback } from "react";
import type { ImageSourcePropType } from "react-native";
import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";
import type { PlaceInfo } from "../../../placeInfo/types";
import { window } from "../../constants";

//TagTextコンポーネントを作成
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

//Tinder風のカードコンポーネントを作成
const Item: React.FC<{ img: ImageSourcePropType; placeInfo: PlaceInfo }> = ({
  img,
  placeInfo,
}) => {
  const width = window.width * 0.7;
  const height = window.height * 0.6; //画像の高さを微調整可能

  const tagLabels: (keyof PlaceInfo)[] = [
    "genre",
    "prefecture",
    "place",
    "station",
    "distance",
  ];
  return (
    <Animated.View
      entering={FadeInDown.duration(300)}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View
        style={{
          width,
          height,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",

          shadowColor: "#000000d1",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        }}
      >
        <Image
          source={img}
          style={{
            width,
            height,
            borderRadius: 20,
          }}
        />
        <Box
          position="absolute"
          top="60%"
          left={0}
          right={0}
          bottom={0}
          borderRadius={20}
          backgroundColor="rgba(0, 0, 0, 0.5)" //黒色の50%透明度
          justifyContent="center"
          alignItems="center"
        >
          {/* 半透明の背景内に配置する要素 */}
          <Text fontSize="$xl" fontWeight="bold" color="white" mt={15}>
            {placeInfo.placeName}
          </Text>
          {/* ジャンルや場所などのハッシュタグを数個並べる+詳細ボタン */}
          <VStack>
            <HStack
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
            </HStack>
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
      </View>
    </Animated.View>
  );
};

//Swipeコンポーネント
export function Swipe() {
  const { placeInfoList, placeInfoLength } = usePlaceInfoAtom();
  const data: ImageSourcePropType[] = [];
  //placeInfoListの中身を取り出して、dataに画像データを格納
  for (let i = 0; i < placeInfoLength; i++) {
    data.push(placeInfoList[i].img);
  }

  const PAGE_WIDTH = window.width;
  const PAGE_HEIGHT = window.height;

  const directionAnimVal = useSharedValue(0);

  //Tinder風のアニメーションを設定
  const animationStyle: any = useCallback(
    (value: number) => {
      "worklet";
      const translateY = interpolate(value, [0, 1], [0, -18]);

      const translateX =
        interpolate(value, [-1, 0], [PAGE_WIDTH, 0], Extrapolation.CLAMP) *
        directionAnimVal.value;

      const rotateZ =
        interpolate(value, [-1, 0], [15, 0], Extrapolation.CLAMP) *
        directionAnimVal.value;

      const zIndex = interpolate(
        value,
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4].map((v) => (placeInfoLength - v) * 10),
        Extrapolation.CLAMP,
      );

      const scale = interpolate(value, [0, 1], [1, 0.95]);

      const opacity = interpolate(
        value,
        [-1, -0.8, 0, 1],
        [0, 0.9, 1, 0.85],
        Extrapolation.EXTEND,
      );

      return {
        transform: [
          { translateY },
          { translateX },
          { rotateZ: `${rotateZ}deg` },
          { scale },
        ],
        zIndex,
        opacity,
      };
    },
    [directionAnimVal.value, PAGE_WIDTH, placeInfoLength],
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop={false}
        defaultIndex={0}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT * 0.8, //コンポーネントの高さを微調整可能
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={data}
        scrollAnimationDuration={500}
        vertical={false}
        //onConfigurePanGestureがないとスワイプできない
        // @ts-ignore
        onConfigurePanGesture={(g) => {
          g.onChange((e: any) => {
            directionAnimVal.value = Math.sign(e.translationX);
          });
        }}
        fixedDirection="negative"
        renderItem={({ index }) => (
          <Item
            key={index}
            img={placeInfoList[index].img}
            placeInfo={placeInfoList[index]}
          />
        )}
        customAnimation={animationStyle}
      />
    </View>
  );
}
