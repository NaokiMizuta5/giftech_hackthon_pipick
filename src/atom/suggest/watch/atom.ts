import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_WATCH_DONE_DATA,
  INITIAL_WATCH_FAVORITE_DATA,
  INITIAL_WATCH_SUGGEST_DATA,
} from "./constants";

const suggestDataAtom = atom<SuggestData[]>(INITIAL_WATCH_SUGGEST_DATA);
const favoriteDataAtom = atom<SuggestData[]>(INITIAL_WATCH_FAVORITE_DATA);
const doneDataAtom = atom<SuggestData[]>(INITIAL_WATCH_DONE_DATA);

export const useWatchSuggestAtom = () => {
  const [suggestData, setSuggestData] = useAtom(suggestDataAtom);
  const [favoriteData, setFavoriteData] = useAtom(favoriteDataAtom);
  const [doneData, setDoneData] = useAtom(doneDataAtom);

  const addSuggestData = (data: SuggestData) => {
    setSuggestData([...suggestData, data]);
  };

  const removeSuggestData = (index: number) => {
    setSuggestData(suggestData.filter((item) => item.index !== index));
  };

  const addFavoriteData = (data: SuggestData) => {
    setFavoriteData([...favoriteData, data]);
  };

  const removeFavoriteData = (index: number) => {
    setFavoriteData(favoriteData.filter((item) => item.index !== index));
  };

  const addDoneData = (data: SuggestData) => {
    setDoneData([...doneData, data]);
  };

  const removeDoneData = (index: number) => {
    setDoneData(doneData.filter((item) => item.index !== index));
  };

  return {
    suggestData,
    addSuggestData,
    removeSuggestData,
    favoriteData,
    addFavoriteData,
    removeFavoriteData,
    doneData,
    addDoneData,
    removeDoneData,
  };
};
