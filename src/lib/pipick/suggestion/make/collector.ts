import type YolpApiResponse from "../../yolp/types/response";
import BaseCollector from "../common/abstracts/collector";

class MakeCollector extends BaseCollector {
  // HACK: make this better
  public readonly GENRE_CODES = {
    // TODO: define genre codes for make domain
    //  @see:https://developer.yahoo.co.jp/webapi/map/openlocalplatform/genre.html
    lecture: "0405",
  };

  async collect(): Promise<YolpApiResponse[]> {
    const lectureSuggestions = await this.fetchByGenre(
      this.GENRE_CODES.lecture,
    );
    // TODO: implement parallel fetching if needed
    // you can add more suggestion types here

    // parallel fetching
    const suggestionResponses = await Promise.all([
      lectureSuggestions,
      // add more suggestion types here
    ]);

    return suggestionResponses;
  }
}

export default MakeCollector;
