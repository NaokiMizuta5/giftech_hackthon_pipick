// export type InitialCountAtom = number;

// export type PlaceInfo = Record<string, string>;
import type { ImageSourcePropType } from "react-native";

export type PlaceInfo = {
  index: number;
  img: ImageSourcePropType;
  placeName: string;
  genre: string;
  prefecture: string;
  place: string;
  station: string;
  distance: string;
};

// export type InitialPlaceInfoAtom = PlaceInfo[];
