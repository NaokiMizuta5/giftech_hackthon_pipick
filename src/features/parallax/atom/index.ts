import { atom, useAtom } from "jotai";
import { INITIAL_CURRENT_INDEX_ATOM } from "../constants";

const currentIndexAtom = atom(INITIAL_CURRENT_INDEX_ATOM);

export const useParallaxAtom = () => {
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);

  return {
    currentIndex,
    setCurrentIndex,
  };
};
