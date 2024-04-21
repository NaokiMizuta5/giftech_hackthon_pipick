import type { Suggestion } from "../types/suggestion";

export interface ISuggestionGen {
  makeSuggestions(): Promise<Suggestion[]>;
}
