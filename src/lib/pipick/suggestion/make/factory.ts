import SuggestionIdQuery from "TODO";
import YolpApiClient from "../../yolp/client";
import YolpCommandFactory from "../../yolp/factory/command";
import Converter from "../common/converter";
// interface
import type ISuggestionGenFactory from "../common/interfaces/factory";
// objects
import SuggestionGen from "../common/suggestionGen";
import MakeCollector from "./collector";
import MakeFilters from "./filters";

import type Location from "../../yolp/types/location";

class MakeSuggestionGenFactory implements ISuggestionGenFactory {
  create(location: Location): SuggestionGen {
    const client = new YolpApiClient();
    const factory = new YolpCommandFactory();
    const collector = new MakeCollector(location, client, factory);
    const converter = new Converter();
    const query = new SuggestionIdQuery();
    const filters = new MakeFilters(query);
    return new SuggestionGen(collector, converter, filters);
  }
}

export default MakeSuggestionGenFactory;
