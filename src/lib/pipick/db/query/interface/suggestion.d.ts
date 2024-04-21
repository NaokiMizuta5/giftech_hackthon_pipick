import type { Suggestion } from "../../../suggestion/common/types/suggestion";

export interface ISuggestionQuery {
  allExperienced(): Promise<Suggestion[]>;
  allBookmarked(): Promise<Suggestion[]>;
}

type suggestedIds = string[];

export interface IIdQuery {
  hasBeenSuggested(suggestionId: string): Promise<boolean>;
  findAlreadySuggestedIds(suggestionIds: string[]): Promise<suggestedIds>;
}
