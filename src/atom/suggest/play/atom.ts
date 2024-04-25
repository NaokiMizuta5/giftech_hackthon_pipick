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

export const usePlaySuggestAtom = () => {
  const [playSuggestData, setPlaySuggestData] = useAtom(playSuggestDataAtom);
  const [playFavoriteData, setPlayFavoriteData] = useAtom(playFavoriteDataAtom);
  const [playDoneData, setPlayDoneData] = useAtom(playDoneDataAtom);

  const addPlaySuggestData = (data: SuggestData) => {
    setPlaySuggestData([...playSuggestData, data]);
  };

  const removePlaySuggestData = (index: number) => {
    setPlaySuggestData(playSuggestData.filter((item) => item.index !== index));
  };

  const addPlayFavoriteData = (data: SuggestData) => {
    setPlayFavoriteData([...playFavoriteData, data]);
  };

  const removePlayFavoriteData = (index: number) => {
    setPlayFavoriteData(
      playFavoriteData.filter((item) => item.index !== index),
    );
  };

  const addPlayDoneData = (data: SuggestData) => {
    setPlayDoneData([...playDoneData, data]);
  };

  const removePlayDoneData = (index: number) => {
    setPlayDoneData(playDoneData.filter((item) => item.index !== index));
  };

  return {
    playSuggestData,
    addPlaySuggestData,
    removePlaySuggestData,
    playFavoriteData,
    addPlayFavoriteData,
    removePlayFavoriteData,
    playDoneData,
    addPlayDoneData,
    removePlayDoneData,
  };
};
