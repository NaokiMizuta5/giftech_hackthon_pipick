import type { IYolpApiClient } from "../../yolp/client";
import type { IYolpCommandFactory } from "../../yolp/factory/command";
// types
import type { Location } from "../../yolp/types/location";
import type { YolpApiResponse } from "../../yolp/types/response";
// interfaces
import type { ICollector } from "../common/interfaces/collector";

class Collector implements ICollector {
  private readonly location: Location;

  private readonly client: IYolpApiClient;
  private readonly factory: IYolpCommandFactory;
  // TODO: design a way to set genreIds
  private readonly genreIds = {
    // TODO: set correct genreIds @see:https://developer.yahoo.co.jp/webapi/map/
    // incorrect genreIds are set now
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
  ) {
    this.client = client;
    this.location = location;
    this.factory = factory;
  }

  async collect(): Promise<YolpApiResponse[]> {
    // TODO: chose what type of restaurant to fetchByGenre
    const italianSuggestions = this.fetchByGenre(this.genreIds.italian);
    const frenchSuggestions = this.fetchByGenre(this.genreIds.french);
    const ramenSuggestions = this.fetchByGenre(this.genreIds.ramen);
    const currySuggestions = this.fetchByGenre(this.genreIds.curry);
    const sushiSuggestions = this.fetchByGenre(this.genreIds.sushi);

    const suggestionResponses = await Promise.all([
      italianSuggestions,
      frenchSuggestions,
      ramenSuggestions,
      currySuggestions,
      sushiSuggestions,
    ]);

    return suggestionResponses;
  }

  private async fetchByGenre(gid: string): Promise<YolpApiResponse> {
    const command = this.factory.createGenreSearchCommand(gid, this.location);
    const response = await this.client.get(command);
    return response;
  }
}

export default Collector;
