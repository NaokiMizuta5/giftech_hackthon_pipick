// objects
import SuggestionIdQuery from "TODO";
import YolpApiClient from "../../yolp/client";
import YolpCommandFactory from "../../yolp/factory/command";
import Converter from "../common/converter";
// interface
import type ISuggestionGenFactory from "../common/interfaces/factory";
import SuggestionGen from "../common/suggestionGen";
import EatCollector from "./collector";
import EatFilters from "./filters";

import type Location from "../../yolp/types/location";

class EatSuggestionGenFactory implements ISuggestionGenFactory {
  create(location: Location): SuggestionGen {
    const client = new YolpApiClient();
    const factory = new YolpCommandFactory();
    const collector = new EatCollector(location, client, factory);
    const converter = new Converter();
    const query = new SuggestionIdQuery();
    const filters = new EatFilters(query);
    return new SuggestionGen(collector, converter, filters);
  }
}

export default EatSuggestionGenFactory;
