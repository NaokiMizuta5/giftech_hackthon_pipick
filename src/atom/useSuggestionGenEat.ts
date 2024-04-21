import { atom, useAtom } from "jotai";
import type { Suggestion } from "../lib/pipick/suggestion/common/types/suggestion";

export const suggestedEatsAtom = atom<Suggestion[]>([]);

export const useStartGameAtom = () => {
  const [suggestedEats, _setSuggestedEats] = useAtom(suggestedEatsAtom);

  // const restaurantSuggestionGen = new RestaurantSuggestionGen();
  //
  const generateSuggestedEats = async () => {
    // const _suggestedEats = await restaurantSuggestionGen.generateSuggestions();
    // setSuggestedEats(_suggestedEats);
  };

  return {
    suggestedEats,
    generateSuggestedEats,
  };
};
