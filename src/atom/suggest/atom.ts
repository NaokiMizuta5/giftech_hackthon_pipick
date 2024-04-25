import { useEatSuggestAtom } from "./eat/atom";
import { useMakeSuggestAtom } from "./make/atom";
import { usePlaySuggestAtom } from "./play/atom";
import type { SuggestType } from "./types";
import { useWatchSuggestAtom } from "./watch/atom";

export const useSuggestAtom = (suggestType: SuggestType) => {
  const eatSuggestAtom = useEatSuggestAtom();
  const makeSuggestAtom = useMakeSuggestAtom();
  const playSuggestAtom = usePlaySuggestAtom();
  const watchSuggestAtom = useWatchSuggestAtom();

  return (() => {
    switch (suggestType) {
      case "watch":
        return { ...watchSuggestAtom };
      case "play":
        return { ...playSuggestAtom };
      case "make":
        return { ...makeSuggestAtom };
      case "eat":
        return { ...eatSuggestAtom };
    }
  })();
};
