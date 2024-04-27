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
import type { SuggestData } from "~/src/atom/suggest/types";
import type { Character } from "~/src/features/character";
import type { ListMenuItem } from "~/src/features/header";

//List画面で表示する変数は、場所名と画像のみで良い。
type EachPlaceProps = {
  placeName: string;
  Img: ImageSourcePropType;
};

type PlacesListProps = {
  character: Character;
  suggestData: SuggestData[];
  favoriteData: SuggestData[];
  doneData: SuggestData[];
  selectedListMenu: ListMenuItem;
};

export function PlacesList({
  character,
  suggestData,
  favoriteData,
  doneData,
  selectedListMenu,
}: PlacesListProps) {
  const [visible, setVisible] = React.useState(false);
  const [visibleIndex, setVisibleIndex] = React.useState<number>(0);

  const handlePress = (targetIndex: number) => {
    setVisibleIndex(targetIndex);
    setVisible(true);
  };

  const EachPlace: React.FC<EachPlaceProps> = ({ placeName, Img }) => {
    if (!(placeName && Img)) {
      return null;
    }
    return (
      <Box
        backgroundColor="#333333"
        borderRadius={10}
        width="100%"
        marginTop={10}
      >
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
        <Modal
          isOpen={visible}
          onClose={() => {
            setVisible(false);
            setVisibleIndex(0);
          }}
        >
          <ModalBackdrop />
          <ModalContent bgColor="black" width="80%" height="70%">
            <ModalHeader>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <PlaceDetail
                index={visibleIndex}
                character={character}
                suggestData={suggestData}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  };

  return (
    <Box backgroundColor="$black" justifyContent="center" alignItems="center">
      <ScrollView width="100%" height="100%">
        {selectedListMenu.id === "0"
          ? favoriteData.map((place) => (
              <Pressable
                key={`${place.index}`}
                onPress={() => handlePress(place.index)}
              >
                <VStack width="100%" alignItems="center" space="md">
                  <EachPlace
                    key={`${place.index}`}
                    placeName={place.placeName}
                    Img={place.img}
                  />
                </VStack>
              </Pressable>
            ))
          : doneData.map((place) => (
              <Pressable
                key={`${place.index}`}
                onPress={() => handlePress(place.index)}
              >
                <VStack width="100%" alignItems="center" space="md">
                  <EachPlace
                    key={`${place.index}`}
                    placeName={place.placeName}
                    Img={place.img}
                  />
                </VStack>
              </Pressable>
            ))}
      </ScrollView>
    </Box>
  );
}
