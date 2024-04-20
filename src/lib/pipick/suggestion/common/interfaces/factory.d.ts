import { ISuggestionGen } from "./suggestionGen";
import { Location } from "../../../yolp/types/location";

export interface ISuggestionGenFactory<T extends ISuggestionGen> {
    createSuggestionGen(location: Location): T;
}
