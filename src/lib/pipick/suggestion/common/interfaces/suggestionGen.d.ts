import type Suggestion from "../types/suggestion";

interface ISuggestionGen {
  makeSuggestions(): Promise<Suggestion[]>;
}

export default ISuggestionGen;
