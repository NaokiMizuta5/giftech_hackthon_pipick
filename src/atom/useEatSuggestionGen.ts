import { atom, useAtom } from "jotai";
import type { Suggestion } from "../lib/pipick/suggestion/common/types/suggestion";
import type { Location } from "../lib/pipick/yolp/types/location";

export const suggestedEatsAtom = atom<Suggestion[]>([]);

export const useStartGameAtom = () => {
  const [suggestedEats, _setSuggestedEats] = useAtom(suggestedEatsAtom);

  // const eatSuggestionGenFactory = new EatSuggestionGenFactory();

  const generateSuggestedEats = async (_location: Location) => {
    // const factory = new EatSuggestionGenFactory();
    // const suggestionGen = factory.create(_location);
    // const suggestions = await suggestionGen.makeSuggestions();
    // setSuggestedEats(suggestions);
  };

  return {
    suggestedEats,
    generateSuggestedEats,
  };
};
