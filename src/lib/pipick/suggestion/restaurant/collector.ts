import type { IYolpApiClient } from "../../yolp/client";
import type { IYolpCommandFactory } from "../../yolp/factory/command";
import type { ICollector } from "../common/interfaces/collector";
import type { IConvertor } from "../common/interfaces/convertor";

import type { Location } from "../../yolp/types/location";
import type { Suggestion } from "../common/types/suggestion";

class RestaurantCollector implements ICollector {
  private readonly location: Location;

  private readonly client: IYolpApiClient;
  private readonly factory: IYolpCommandFactory;
  private readonly converter: IConvertor;
  private readonly genreIds = {
    // TODO: set correct genreIds
    // incorrect genreIds are set now @see https://developer.yahoo.co.jp/webapi/map/
    italian: "G001",
    french: "G002",
    ramen: "G004",
    curry: "G005",
    sushi: "G006",
  };

  constructor(
    location: Location,
    client: IYolpApiClient,
    factory: IYolpCommandFactory,
    converter: IConvertor,
  ) {
    this.client = client;
    this.location = location;
    this.factory = factory;
    this.converter = converter;
  }

  async collect(): Promise<Suggestion[]> {
    // TODO: chose what type of restaurant to fetchByGenre
    const italianSuggestions = this.fetchByGenre(this.genreIds.italian);
    const frenchSuggestions = this.fetchByGenre(this.genreIds.french);
    const ramenSuggestions = this.fetchByGenre(this.genreIds.ramen);
    const currySuggestions = this.fetchByGenre(this.genreIds.curry);
    const sushiSuggestions = this.fetchByGenre(this.genreIds.sushi);

    const suggestionsArray = await Promise.all([
      italianSuggestions,
      frenchSuggestions,
      ramenSuggestions,
      currySuggestions,
      sushiSuggestions,
    ]);
    const suggestions = suggestionsArray.flat();

    return suggestions;
  }

  private async fetchByGenre(gid: string): Promise<Suggestion[]> {
    const command = this.factory.createGenreSearchCommand(gid, this.location);
    const response = await this.client.get(command);
    const suggestions = this.converter.toSuggestion(response);
    return suggestions;
  }
}

export default RestaurantCollector;
