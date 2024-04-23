import { atom, useAtom, useAtomValue } from "jotai";
import {
  INITIAL_PLACE_INFO_LENGTH_ATOM,
  INITIAL_PLACE_INFO_LIST_ATOM,
} from "../constants";
import type { PlaceInfo } from "../types";

const placeInfoListAtom = atom<PlaceInfo[]>(INITIAL_PLACE_INFO_LIST_ATOM);
const placeInfoLengthAtom = atom<number>(INITIAL_PLACE_INFO_LENGTH_ATOM);

export const usePlaceInfoAtom = () => {
  const [placeInfoList, _setPlaceInfo] = useAtom(placeInfoListAtom);
  const placeInfoLength = useAtomValue(placeInfoLengthAtom);
  return {
    placeInfoList,
    placeInfoLength,
  };
};
