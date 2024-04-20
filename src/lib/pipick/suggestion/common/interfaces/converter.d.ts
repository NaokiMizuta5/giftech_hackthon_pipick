import type { YolpApiResponse } from "../../../yolp/types/response";
import type { Suggestion } from "../types/suggestion";

export interface IConverter {
  toSuggestion(responses: YolpApiResponse[]): Suggestion[];
}
