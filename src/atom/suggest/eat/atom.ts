import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_EAT_DONE_DATA,
  INITIAL_EAT_FAVORITE_DATA,
  INITIAL_EAT_SUGGEST_DATA,
} from "./constants";

const suggestDataAtom = atom<SuggestData[]>(INITIAL_EAT_SUGGEST_DATA);
const favoriteDataAtom = atom<SuggestData[]>(INITIAL_EAT_FAVORITE_DATA);
const doneDataAtom = atom<SuggestData[]>(INITIAL_EAT_DONE_DATA);

export const useEatSuggestAtom = () => {
  const [suggestData, setSuggestData] = useAtom(suggestDataAtom);
  const [favoriteData, setFavoriteData] = useAtom(favoriteDataAtom);
  const [doneData, eatDoneData] = useAtom(doneDataAtom);

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
    eatDoneData([...doneData, data]);
  };

  const removeDoneData = (index: number) => {
    eatDoneData(doneData.filter((item) => item.index !== index));
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
