import { IConvertor } from "../common/interfaces/convertor";

import { Feature } from "../../yolp/types/response";
import { YolpApiResponse } from "../../yolp/types/response";
import { Suggestion } from "../common/types/suggestion";

export class RestaurantConverter implements IConvertor {

  toSuggestion(response: YolpApiResponse): Suggestion[] {
    const suggestions = response.Feature.map((feature: Feature) => {
      return {
        name: feature.Name,
        description: feature.Description,
        address: feature.Property.Address,
        distance: Number(feature.Property.Station[0].Distance),
        url: "",
      };
    });
    return suggestions;
  }
}

