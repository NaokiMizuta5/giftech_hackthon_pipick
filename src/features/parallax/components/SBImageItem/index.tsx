import { Image } from "expo-image";
import React from "react";
import type {
  ImageSourcePropType,
  ImageURISource,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  img?: ImageSourcePropType;
}

export const SBImageItem: React.FC<Props> = ({ style, index: _index, img }) => {
  const index = _index ?? 0;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image
        cachePolicy={"memory-disk"}
        key={index}
        style={styles.image}
        source={img ?? source}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
