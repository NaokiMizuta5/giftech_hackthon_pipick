import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import type { ImageSourcePropType } from "react-native";

//重要
//List画面で表示する変数は、場所名と画像のみで良い。

type EachPlaceProps = {
  placeName: string;
  Img: ImageSourcePropType;
};

const EachPlace: React.FC<EachPlaceProps> = ({ placeName, Img }) => {
  if (!(placeName && Img)) {
    return null;
  }
  return (
    <Box backgroundColor="#333333" borderRadius={10} width="100%">
      <HStack alignItems="center" mt="$2" mb="$2" ml="$4">
        <Image source={Img} alt="Place Image" borderRadius={10} />
        <Text
          //テキストが長い場合、折り返す
          fontSize="$md"
          color="$white"
          ml="$4"
          fontWeight="bold"
          width="60%"
        >
          {placeName}
        </Text>
      </HStack>
    </Box>
  );
};

export function PlacesList() {
  // const {  } = usePlacesList();
  // const {
  //   count: atomCount,
  // } = usePlacesListAtom();

  //Todo: ここで、PlacesListのデータを取得する。swipeコンポーネント削除後。
  //データは、PlaceInfoから取得する。
  const tempImg: ImageSourcePropType = require("../../constants/Image/0.png");
  const placesList = [
    {
      placeName: "三鷹の森ジブリ美術館",
      Img: tempImg,
    },
    {
      placeName: "レゴランド・ディスカバリー・センター東京",
      Img: tempImg,
    },
    {
      placeName: "Place3",
      Img: tempImg,
    },
  ];
  return (
    <Box backgroundColor="$black" justifyContent="center" alignItems="center">
      <VStack width="90%" alignItems="center" space="md">
        {placesList.map((place) => (
          <EachPlace placeName={place.placeName} Img={place.Img} />
        ))}
      </VStack>
    </Box>
  );
}
