import { atom, useAtom } from "jotai";
import type { SuggestData } from "../types";
import {
  INITIAL_WATCH_DONE_DATA,
  INITIAL_WATCH_FAVORITE_DATA,
  INITIAL_WATCH_SUGGEST_DATA,
} from "./constants";

const watchSuggestDataAtom = atom<SuggestData[]>(INITIAL_WATCH_SUGGEST_DATA);
const watchFavoriteDataAtom = atom<SuggestData[]>(INITIAL_WATCH_FAVORITE_DATA);
const watchDoneDataAtom = atom<SuggestData[]>(INITIAL_WATCH_DONE_DATA);

export const useWatchSuggestAtom = () => {
  const [watchSuggestData, setWatchSuggestData] = useAtom(watchSuggestDataAtom);
  const [watchFavoriteData, setWatchFavoriteData] = useAtom(
    watchFavoriteDataAtom,
  );
  const [watchDoneData, setWatchDoneData] = useAtom(watchDoneDataAtom);

  const addWatchSuggestData = (data: SuggestData) => {
    setWatchSuggestData([...watchSuggestData, data]);
  };

  const removeWatchSuggestData = (index: number) => {
    setWatchSuggestData(
      watchSuggestData.filter((item) => item.index !== index),
    );
  };

  const addWatchFavoriteData = (data: SuggestData) => {
    setWatchFavoriteData([...watchFavoriteData, data]);
  };

  const removeWatchFavoriteData = (index: number) => {
    setWatchFavoriteData(
      watchFavoriteData.filter((item) => item.index !== index),
    );
  };

  const addWatchDoneData = (data: SuggestData) => {
    setWatchDoneData([...watchDoneData, data]);
  };

  const removeWatchDoneData = (index: number) => {
    setWatchDoneData(watchDoneData.filter((item) => item.index !== index));
  };

  return {
    watchSuggestData,
    addWatchSuggestData,
    removeWatchSuggestData,
    watchFavoriteData,
    addWatchFavoriteData,
    removeWatchFavoriteData,
    watchDoneData,
    addWatchDoneData,
    removeWatchDoneData,
  };
};
