import BaseFilters from "../common/abstracts/filter";
// interfaces
import type IFilters from "../common/interfaces/filter";
// types
import type Suggestion from "../common/types/suggestion";

class EatFilters extends BaseFilters implements IFilters {
  async apply(suggestions: Suggestion[]): Promise<Suggestion[]> {
    return this.seenSuggestionFilter(suggestions);
  }
}

export default EatFilters;
