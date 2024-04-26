import {
  Box,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import type { ImageSourcePropType } from "react-native";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";

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
  const { placeInfoList } = usePlaceInfoAtom();
  return (
    <Box backgroundColor="$black" justifyContent="center" alignItems="center">
      <ScrollView width="100%" height="100%">
        <VStack width="100%" alignItems="center" space="md">
          {placeInfoList.map((place) => (
            <EachPlace
              key={`${place.img}`}
              placeName={place.placeName}
              Img={place.img}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
