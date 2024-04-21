import type { Location } from "../../../yolp/types/location";
import type { ISuggestionGen } from "./suggestionGen";

export interface ISuggestionGenFactory<T extends ISuggestionGen> {
  create(location: Location): T;
}
