import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_EAT_DONE_DATA,
  INITIAL_EAT_FAVORITE_DATA,
  INITIAL_EAT_SUGGEST_DATA,
} from "./constants";

const eatSuggestDataAtom = atom<SuggestData[]>(INITIAL_EAT_SUGGEST_DATA);
const eatFavoriteDataAtom = atom<SuggestData[]>(INITIAL_EAT_FAVORITE_DATA);
const eatDoneDataAtom = atom<SuggestData[]>(INITIAL_EAT_DONE_DATA);

export const useEatSuggestAtom = () => {
  const [eatSuggestData, setEatSuggestData] = useAtom(eatSuggestDataAtom);
  const [eatFavoriteData, setEatFavoriteData] = useAtom(eatFavoriteDataAtom);
  const [eatDoneData, setEatDoneData] = useAtom(eatDoneDataAtom);

  const addEatSuggestData = (data: SuggestData) => {
    setEatSuggestData([...eatSuggestData, data]);
  };

  const removeEatSuggestData = (index: number) => {
    setEatSuggestData(eatSuggestData.filter((item) => item.index !== index));
  };

  const addEatFavoriteData = (data: SuggestData) => {
    setEatFavoriteData([...eatFavoriteData, data]);
  };

  const removeEatFavoriteData = (index: number) => {
    setEatFavoriteData(eatFavoriteData.filter((item) => item.index !== index));
  };

  const addEatDoneData = (data: SuggestData) => {
    setEatDoneData([...eatDoneData, data]);
  };

  const removeEatDoneData = (index: number) => {
    setEatDoneData(eatDoneData.filter((item) => item.index !== index));
  };

  return {
    eatSuggestData,
    addEatSuggestData,
    removeEatSuggestData,
    eatFavoriteData,
    addEatFavoriteData,
    removeEatFavoriteData,
    eatDoneData,
    addEatDoneData,
    removeEatDoneData,
  };
};
