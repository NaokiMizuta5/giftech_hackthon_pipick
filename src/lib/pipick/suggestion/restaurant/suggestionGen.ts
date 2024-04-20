// interfaces
import type { ICollector } from "../common/interfaces/collector";
import type { IConverter } from "../common/interfaces/converter";
import type { IFilters } from "../common/interfaces/filter";
import type { ISuggestionGen } from "../common/interfaces/suggestion";
// types
import type { Suggestion } from "../common/types/suggestion";
// functions
import { shuffle } from "../utils/shuffle";

class RestaurantSuggestionGen implements ISuggestionGen {
  private readonly collector: ICollector;
  private readonly converter: IConverter;
  private readonly filters: IFilters;
  // TODO: define this in a config file
  private readonly MAX_SUGGESTIONS = 50;

  constructor(collector: ICollector, converter: IConverter, filters: IFilters) {
    this.collector = collector;
    this.converter = converter;
    this.filters = filters;
  }

  async generateSuggestions(): Promise<Suggestion[]> {
    const suggestionResponses = await this.collector.collect();
    const suggestions = this.converter.toSuggestion(suggestionResponses);
    const filteredSuggestions = await this.filterSuggestions(suggestions);
    const chosenSuggestions = shuffle(filteredSuggestions).slice(
      0,
      this.MAX_SUGGESTIONS,
    );
    return chosenSuggestions;
  }

  // This make it easy to add new filters in the future
  private async filterSuggestions(
    suggestions: Suggestion[],
  ): Promise<Suggestion[]> {
    const neverSeenSuggestions =
      await this.filters.seenSuggestionFilter(suggestions);
    return neverSeenSuggestions;
  }
}

export default RestaurantSuggestionGen;
