import type { ImageSourcePropType } from "react-native";

export type SuggestData = {
  index: number;
  img: ImageSourcePropType;
  placeName: string;
  tags: string[];
  detail: {
    star: {
      [key: string]: number;
    };
    GoogleUrl: string;
    comment: string;
  };
};
