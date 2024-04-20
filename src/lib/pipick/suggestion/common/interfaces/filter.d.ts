export interface IFilters {
  seenSuggestionFilter(suggestions: Suggestion[]): Promise<Suggestion[]>;
}
