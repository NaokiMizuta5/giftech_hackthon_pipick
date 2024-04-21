import type Location from "../../../yolp/types/location";
import type SuggestionGen from "../suggestionGen";

interface ISuggestionGenFactory {
  create(location: Location): SuggestionGen;
}

export default ISuggestionGenFactory;
