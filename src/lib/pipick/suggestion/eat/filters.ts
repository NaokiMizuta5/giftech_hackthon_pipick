import type { IIdQuery } from "../../db/query/interface/suggestion";
// interfaces
import type { IFilters } from "../common/interfaces/filter";
// types
import type { Suggestion } from "../common/types/suggestion";

class Filters implements IFilters {
  private readonly query: IIdQuery;

  constructor(query: IIdQuery) {
    this.query = query;
  }

  async seenSuggestionFilter(suggestions: Suggestion[]): Promise<Suggestion[]> {
    const suggestedIds = await this.query.findAlreadySuggestedIds(
      suggestions.map((suggestion) => suggestion.id),
    );
    // This is for optimizing the filtering process
    const suggestedIdsMap = new Map(suggestedIds.map((id) => [id, true]));

    return suggestions.filter((suggestion) => {
      return !suggestedIdsMap.has(suggestion.id);
    });
  }
}

export default Filters;
