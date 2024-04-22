import type { YolpApiResponse } from "../../../yolp/types/response";
import type Suggestion from "../types/suggestion";

interface IConverter {
  toSuggestion(responses: YolpApiResponse[]): Suggestion[];
}

export default IConverter;
