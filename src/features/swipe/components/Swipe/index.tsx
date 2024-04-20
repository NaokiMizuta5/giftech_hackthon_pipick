import { Box, Image, Text, VStack } from "@gluestack-ui/themed";

export function Swipe() {
  // const {  } = useSwipe();
  // const {
  //   count: atomCount,
  // } = useSwipeAtom();
  const _placeName = "三鷹の森ジブリ美術館";
  const _genre = "美術館";
  const _place = "井の頭公園";
  return (
    <Box justifyContent="center">
      <VStack alignItems="center">
        <Box
          position="relative"
          width="80%"
          height="80%"
          borderRadius={20}
          overflow="hidden" // 内容がはみ出た部分を隠す
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
          >
            {/* 半透明の背景内に配置する要素 */}
            <Text fontSize="xl" fontWeight="bold" color="white">
              This is a text inside the transparent background
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
