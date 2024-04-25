// export type InitialCountAtom = number;

// export type PlaceInfo = Record<string, string>;
//参照：https://docs.google.com/spreadsheets/d/1tJVoaSNXRapdYbyT6gCDVCPcCDuDzlpH_QNR3V_mmLU/edit#gid=881965264
import type { ImageSourcePropType } from "react-native";

export type PlaceInfo = {
  index: number;
  img: ImageSourcePropType;
  placeName: string;
  comment: string;
  TagInfo: {
    [key: number]: string | null;
  };
  DetailInfo: {
    star: {
      [key: string]: number;
    };
    GoogleUrl: string;
  };
};

// export type InitialPlaceInfoAtom = PlaceInfo[];
