import { Suggestion } from '../types/suggestion';

export interface IFilters {
  seenSuggestionFilter(suggestions: Suggestion[]): Promise<Suggestion[]>;
}
