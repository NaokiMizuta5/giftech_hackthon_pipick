import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_MAKE_DONE_DATA,
  INITIAL_MAKE_FAVORITE_DATA,
  INITIAL_MAKE_SUGGEST_DATA,
} from "./constants";

const makeSuggestDataAtom = atom<SuggestData[]>(INITIAL_MAKE_SUGGEST_DATA);
const makeFavoriteDataAtom = atom<SuggestData[]>(INITIAL_MAKE_FAVORITE_DATA);
const makeDoneDataAtom = atom<SuggestData[]>(INITIAL_MAKE_DONE_DATA);

export const useEatSuggestAtom = () => {
  const [makeSuggestData, setMakeSuggestData] = useAtom(makeSuggestDataAtom);
  const [makeFavoriteData, setMakeFavoriteData] = useAtom(makeFavoriteDataAtom);
  const [makeDoneData, setMakeDoneData] = useAtom(makeDoneDataAtom);

  const addMakeSuggestData = (data: SuggestData) => {
    setMakeSuggestData([...makeSuggestData, data]);
  };

  const removeMakeSuggestData = (index: number) => {
    setMakeSuggestData(makeSuggestData.filter((item) => item.index !== index));
  };

  const addMakeFavoriteData = (data: SuggestData) => {
    setMakeFavoriteData([...makeFavoriteData, data]);
  };

  const removeMakeFavoriteData = (index: number) => {
    setMakeFavoriteData(
      makeFavoriteData.filter((item) => item.index !== index),
    );
  };

  const addMakeDoneData = (data: SuggestData) => {
    setMakeDoneData([...makeDoneData, data]);
  };

  const removeMakeDoneData = (index: number) => {
    setMakeDoneData(makeDoneData.filter((item) => item.index !== index));
  };

  return {
    makeSuggestData,
    addMakeSuggestData,
    removeMakeSuggestData,
    makeFavoriteData,
    addMakeFavoriteData,
    removeMakeFavoriteData,
    makeDoneData,
    addMakeDoneData,
    removeMakeDoneData,
  };
};
