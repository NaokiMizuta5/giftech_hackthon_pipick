// interface
import { ISuggestionGenFactory } from '../common/interfaces/factory';
// objects
import EatSuggestionGen from './suggestionGen';
import Collector from './collector';
import Converter from './converter';
import Filters from './filters';
import RestaurantQuery from 'TODO';

import YolpApiClient from '../../yolp/client';
import { YolpCommandFactory } from '../../yolp/factory/command';

import { Location } from '../../yolp/types/location';

class EatSuggestionGenFactory implements ISuggestionGenFactory<EatSuggestionGen> {

  create(location: Location): EatSuggestionGen {
    const client = new YolpApiClient();
    const factory = new YolpCommandFactory();
    const collector = new Collector(location, client, factory);
    const converter = new Converter();
    const query = new RestaurantQuery();
    const filters = new Filters(query);
    return new EatSuggestionGen(collector, converter, filters);
  }
}

export default EatSuggestionGenFactory;
