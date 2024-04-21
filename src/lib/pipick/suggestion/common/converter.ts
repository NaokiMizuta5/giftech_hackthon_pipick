// types
import type { Feature } from "../../yolp/types/response";
import type { YolpApiResponse } from "../../yolp/types/response";
// interfaces
import type IConverter from "./interfaces/converter";
import type Suggestion from "./types/suggestion";

class Converter implements IConverter {
  toSuggestion(responses: YolpApiResponse[]): Suggestion[] {
    // O(f*g) <- @2024/4/20 I think 100 features * 8 genres = 800 is usually worst iteration (It's just my guess)
    // f: number of features/results (max 100) @see: https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/localsearch.html
    // g: number of genres (depends on how many genres are searched per suggestion)) @see: ./collector.ts
    const suggestions = responses.flatMap((response: YolpApiResponse) => {
      // TODO: modify this after defining the Suggestion type
      return response.Feature.map((feature: Feature) => {
        return {
          id: feature.Property.Uid,
          name: feature.Name,
          // TODO: think better solution for description
          description: feature.Description,
          catchCopy: feature.Property.CatchCopy,
          address: feature.Property.Address,
          imageUri: feature.Property.LeadImage,
          // NOTE: Maybe we should encode the query string
          googleMapUri: `https://www.google.com/maps/search/?api=1&query=${feature.Name}`,
          tags: String(feature.Category).split(","),
        };
      });
    });
    return suggestions;
  }
}

export default Converter;
