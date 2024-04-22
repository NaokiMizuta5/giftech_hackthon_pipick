import type YolpApiResponse from "../../yolp/types/response";
import BaseCollector from "../common/abstracts/collector";

class PlayCollector extends BaseCollector {
  // HACK: make this better
  public readonly GENRE_CODES = {
    // TODO: define genre codes for play domain
    //  @see:https://developer.yahoo.co.jp/webapi/map/openlocalplatform/genre.html
    leisure: "0303",
    entertainment: "0305",
  };

  async collect(): Promise<YolpApiResponse[]> {
    const leisureSuggestions = await this.fetchByGenre(
      this.GENRE_CODES.leisure,
    );
    const entertainmentSuggestions = await this.fetchByGenre(
      this.GENRE_CODES.entertainment,
    );
    // TODO: implement parallel fetching if needed
    // you can add more suggestion types here

    // parallel fetching
    const suggestionResponses = await Promise.all([
      leisureSuggestions,
      entertainmentSuggestions,
      // add more suggestion types here
    ]);

    return suggestionResponses;
  }
}

export default PlayCollector;
