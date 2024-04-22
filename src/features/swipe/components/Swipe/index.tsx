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
import Carousel, {
  type TAnimationStyle,
} from "react-native-reanimated-carousel";
import { window } from "../../constants";
import { getImages } from "../../utils/get-image";

const data = getImages();

type PlaceInfo = Record<string, string>;

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

export function Swipe() {
  // const {  } = useSwipe();
  // const {
  //   count: atomCount,
  // } = useSwipeAtom();
  const placeInfo: PlaceInfo = {
    placeName: "三鷹の森ジブリ美術館",
    genre: "美術館",
    prefecture: "東京都",
    place: "井の頭公園",
    station: "吉祥寺駅",
    distance: "1.5km",
  };

  const PAGE_WIDTH = window.width;
  const PAGE_HEIGHT = window.height;

  const directionAnimVal = useSharedValue(0);

  const animationStyle: TAnimationStyle = useCallback(
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
        [0, 1, 2, 3, 4].map((v) => (data.length - v) * 10),
        // Extrapolate.CLAMP
        Extrapolation.CLAMP,
      );

      const scale = interpolate(value, [0, 1], [1, 0.95]);

      const opacity = interpolate(
        value,
        [-1, -0.8, 0, 1],
        [0, 0.9, 1, 0.85],
        // Extrapolate.EXTEND
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
    [directionAnimVal.value, PAGE_WIDTH],
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop={false}
        defaultIndex={0}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={data}
        scrollAnimationDuration={500}
        vertical={false}
        onConfigurePanGesture={(g) => {
          g.onChange((e) => {
            directionAnimVal.value = Math.sign(e.translationX);
          });
        }}
        fixedDirection="negative"
        renderItem={({ index, item }) => (
          <Item key={index} img={item} placeInfo={placeInfo} />
        )}
        customAnimation={animationStyle}
      />
    </View>
  );
}

const Item: React.FC<{ img: ImageSourcePropType; placeInfo: PlaceInfo }> = ({
  img,
  placeInfo,
}) => {
  const width = window.width * 0.7;
  const height = window.height * 0.5;
  //fetchしてきたデータの一部をここに入れる(仮)
  const tagLabels = ["genre", "prefecture", "place", "station", "distance"];
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
              {tagLabels.map((label) => (
                <TagText key={label}>{placeInfo[label]}</TagText>
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
