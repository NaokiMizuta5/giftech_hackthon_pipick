import { Box, Button, HStack, Image, Text, VStack } from "@gluestack-ui/themed";

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

  //fetchしてきたデータの一部をここに入れる(仮)
  const tagLabels = ["genre", "prefecture", "place", "station", "distance"];
  const placeInfo: PlaceInfo = {
    placeName: "三鷹の森ジブリ美術館",
    genre: "美術館",
    prefecture: "東京都",
    place: "井の頭公園",
    station: "吉祥寺駅",
    distance: "1.5km",
  };

  return (
    <Box justifyContent="center">
      <VStack alignItems="center">
        <Box
          position="relative"
          width="80%"
          height="80%"
          borderRadius={20}
          overflow="hidden"
        >
          <Image
            source={require("./sampleImg/swipeSampleImg.png")}
            alt="Place Image"
            width="100%"
            height="100%"
          />
          {/* 画像上に重ねる半透明の背景 */}
          <Box
            position="absolute"
            top="60%"
            left={0}
            right={0}
            bottom={0}
            borderRadius={20}
            backgroundColor="rgba(0, 0, 0, 0.5)" //黒色の50%透明度)
            alignItems="center"
          >
            {/* 半透明の背景内に配置する要素 */}
            <Text fontSize="$xl" fontWeight="bold" color="white" mt={15}>
              {placeInfo.placeName}
            </Text>
            {/* ジャンルや場所などのハッシュタグを数個並べる+詳細ボタン */}
            <Box borderRadius={10}>
              <VStack>
                <HStack
                  flexWrap="wrap"
                  justifyContent="center"
                  borderRadius={10}
                  mt={5}
                  mb={5}
                >
                  {tagLabels.map((label) => (
                    <TagText key={label}>{placeInfo[label]}</TagText>
                  ))}
                </HStack>
                {/* Todo：詳細を見るボタンのコンポーネントを追加予定 */}
                <Button bgColor="white" />
              </VStack>
            </Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
