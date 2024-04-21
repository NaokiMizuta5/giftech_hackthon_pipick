// functions
import { shuffle } from "../utils/shuffle";
// interfaces
import type ICollector from "./interfaces/collector";
import type IConverter from "./interfaces/converter";
import type IFilters from "./interfaces/filter";
import type ISuggestionGen from "./interfaces/suggestionGen";
// types
import type Suggestion from "./types/suggestion";

class SuggestionGen implements ISuggestionGen {
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

  async makeSuggestions(): Promise<Suggestion[]> {
    const suggestionResponses = await this.collector.collect();
    const suggestions = this.converter.toSuggestion(suggestionResponses);
    const filteredSuggestions = await this.filters.apply(suggestions);
    const chosenSuggestions = shuffle(filteredSuggestions).slice(
      0,
      this.MAX_SUGGESTIONS,
    );
    return chosenSuggestions;
  }
}

export default SuggestionGen;
