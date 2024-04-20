import type { IConverter } from "../common/interfaces/converter";

import type { Feature } from "../../yolp/types/response";
import type { YolpApiResponse } from "../../yolp/types/response";
import type { Suggestion } from "../common/types/suggestion";

export class RestaurantConverter implements IConverter {
  toSuggestion(responses: YolpApiResponse[]): Suggestion[] {
    // O(f*g) <- @2024/4/20 I think 100 features * 8 genres = 800 is usually worst iteration (It's just my guess)
    // f: number of features/results (max 100) @see: https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/localsearch.html
    // g: number of genres (depends on how many genres are searched per suggestion)) @see: ./collector.ts
    const suggestions = responses.flatMap((response) => {
      return response.Feature.map((feature: Feature) => {
        return {
          id: feature.Id,
          name: feature.Name,
          description: feature.Description,
          address: feature.Property.Address,
          distance: Number(feature.Property.Station[0].Distance),
          url: "",
        };
      });
    });
    return suggestions;
  }
}
