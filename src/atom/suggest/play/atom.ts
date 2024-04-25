import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_PLAY_DONE_DATA,
  INITIAL_PLAY_FAVORITE_DATA,
  INITIAL_PLAY_SUGGEST_DATA,
} from "./constants";

const playSuggestDataAtom = atom<SuggestData[]>(INITIAL_PLAY_SUGGEST_DATA);
const playFavoriteDataAtom = atom<SuggestData[]>(INITIAL_PLAY_FAVORITE_DATA);
const playDoneDataAtom = atom<SuggestData[]>(INITIAL_PLAY_DONE_DATA);

export const useEatSuggestAtom = () => {
  const [playSuggestData, setEatSuggestData] = useAtom(playSuggestDataAtom);
  const [playFavoriteData, setEatFavoriteData] = useAtom(playFavoriteDataAtom);
  const [eatDoneData, setEatDoneData] = useAtom(playDoneDataAtom);

  const addEatSuggestData = (data: SuggestData) => {
    setEatSuggestData([...playSuggestData, data]);
  };

  const removeEatSuggestData = (index: number) => {
    setEatSuggestData(playSuggestData.filter((item) => item.index !== index));
  };

  const addEatFavoriteData = (data: SuggestData) => {
    setEatFavoriteData([...playFavoriteData, data]);
  };

  const removeEatFavoriteData = (index: number) => {
    setEatFavoriteData(playFavoriteData.filter((item) => item.index !== index));
  };

  const addEatDoneData = (data: SuggestData) => {
    setEatDoneData([...eatDoneData, data]);
  };

  const removeEatDoneData = (index: number) => {
    setEatDoneData(eatDoneData.filter((item) => item.index !== index));
  };

  return {
    playSuggestData,
    addEatSuggestData,
    removeEatSuggestData,
    playFavoriteData,
    addEatFavoriteData,
    removeEatFavoriteData,
    eatDoneData,
    addEatDoneData,
    removeEatDoneData,
  };
};
