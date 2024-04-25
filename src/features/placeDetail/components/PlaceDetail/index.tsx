import {
  Box,
  Button,
  ButtonText,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { usePlaceInfoAtom } from "../../../placeInfo/atom";

export function PlaceDetail({ index }: { index: number }) {
  // const {  } = usePlaceDetail();
  // const {
  //   count: atomCount,
  // } = usePlaceDetailAtom();
  const { placeInfoList } = usePlaceInfoAtom();
  const { img, placeName, detail } = placeInfoList[index];
  if (!img) {
    return <Text textAlign="center">Please Swipe!</Text>;
  }
  return (
    <Box>
      <VStack>
        <Box style={styles.box1}>
          <Text style={styles.text1}>{placeName}</Text>
          <Image source={img} style={styles.image} />
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
        <Button style={styles.button}>
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
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: "70%",
    height: "70%",
    borderRadius: 10,
  },
  box2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: "#00E0A3",
    borderRadius: 10,
    marginTop: 10,
  },
});
