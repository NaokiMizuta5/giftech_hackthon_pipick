// interfaces
import type { IFilters } from "../common/interfaces/filter";
// types
import type { Suggestion } from "../common/types/suggestion";

// TODO: remove this after implementing IRestaurantQuery in lib/pipick/db/...
interface IRestaurantQuery {
  getSeenRestaurantIds(): Promise<string[]>;
}

class Filters implements IFilters {
  private readonly query: IRestaurantQuery;

  constructor(query: IRestaurantQuery) {
    this.query = query;
  }

  async seenSuggestionFilter(suggestions: Suggestion[]): Promise<Suggestion[]> {
    const seenRestaurantIds = await this.query.getSeenRestaurantIds();

    return suggestions.filter((suggestion) => {
      return !seenRestaurantIds.includes(suggestion.id);
    });
  }
}

export default Filters;
