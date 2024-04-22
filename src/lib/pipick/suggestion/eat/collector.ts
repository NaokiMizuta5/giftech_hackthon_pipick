import type YolpApiResponse from "../../yolp/types/response";
import BaseCollector from "../common/abstracts/collector";

class EatCollector extends BaseCollector {
  // HACK: make this better
  public readonly GENRE_CODES = {
    //  @see:https://developer.yahoo.co.jp/webapi/map/openlocalplatform/genre.html
    food: "01",
  };

  async collect(): Promise<YolpApiResponse[]> {
    const foodSuggestions = await this.fetchByGenre(this.GENRE_CODES.food);
    // you can add more suggestion types here

    // parallel fetching
    const suggestionResponses = await Promise.all([
      foodSuggestions,
      // add more suggestion types here
    ]);

    return suggestionResponses;
  }
}

export default EatCollector;
