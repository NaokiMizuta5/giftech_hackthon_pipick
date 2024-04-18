import { ISuggestionGen } from "../common/interfaces/suggestion";
import { ICollector } from "../common/interfaces/collector";

import { Suggestion } from "../common/types/suggestion";

import { shuffle } from "../utils/shuffle";

class RestaurantSuggestionGen implements ISuggestionGen {
  private readonly collector: ICollector;
  private readonly MAX_SUGGESTIONS = 50;

  constructor(collector: ICollector) {
    this.collector = collector;
  }

  async generateSuggestions(): Promise<Suggestion[]> {
    const suggestions = await this.collector.collect();
    const chosenSuggestions = shuffle(suggestions).slice(0, this.MAX_SUGGESTIONS);
    return chosenSuggestions;
  }
}

export default RestaurantSuggestionGen;
