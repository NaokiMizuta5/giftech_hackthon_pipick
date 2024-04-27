import { PlaceDetail } from "@/features/placeDetail";
import {
  Box,
  CloseIcon,
  HStack,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed/build/components/Badge/styled-components";
import * as React from "react";
import { type ImageSourcePropType, Pressable } from "react-native";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";

//List画面で表示する変数は、場所名と画像のみで良い。
type EachPlaceProps = {
  index: number;
  placeName: string;
  Img: ImageSourcePropType;
};

export function PlacesList() {
  // const {  } = usePlacesList();
  // const {
  //   count: atomCount,
  // } = usePlacesListAtom();
  const { placeInfoList } = usePlaceInfoAtom();

  const [visible, setVisible] = React.useState(false);
  // const [visibleIndex, setVisibleIndex] = React.useState<number>(0);

  const handlePress = () => {
    // setVisibleIndex(visibleIndex);
    setVisible(true);
  };

  const EachPlace: React.FC<EachPlaceProps> = ({ index, placeName, Img }) => {
    if (!(placeName && Img && index)) {
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
        <Modal isOpen={visible} onClose={() => setVisible(false)}>
          <ModalBackdrop />
          <ModalContent bgColor="black" width="80%" height="70%">
            <ModalHeader>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <PlaceDetail index={index} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  };

  return (
    <Box backgroundColor="$black" justifyContent="center" alignItems="center">
      <ScrollView width="100%" height="100%">
        <Pressable onPress={handlePress}>
          <VStack width="100%" alignItems="center" space="md">
            {placeInfoList.map((place) => (
              <EachPlace
                key={`${place.index}`}
                index={place.index}
                placeName={place.placeName}
                Img={place.img}
              />
            ))}
          </VStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
