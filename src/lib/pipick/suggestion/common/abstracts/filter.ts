// interfaces
import type ISuggestionIdQuery from "../../../db/query/interface/suggestionId";
import type IFilters from "../interfaces/filter";
// types
import type Suggestion from "../types/suggestion";

abstract class BaseFilters implements IFilters {
  private readonly query: ISuggestionIdQuery;

  constructor(query: ISuggestionIdQuery) {
    this.query = query;
  }

  abstract apply(suggestions: Suggestion[]): Promise<Suggestion[]>;

  async seenSuggestionFilter(suggestions: Suggestion[]): Promise<Suggestion[]> {
    const suggestedIds = await this.query.findAlreadySuggestedIds(
      suggestions.map((suggestion) => suggestion.id),
    );
    const suggestedIdsMap = new Map(suggestedIds.map((id) => [id, true]));
    return suggestions.filter((suggestion) => {
      return !suggestedIdsMap.has(suggestion.id);
    });
  }
}

export default BaseFilters;
