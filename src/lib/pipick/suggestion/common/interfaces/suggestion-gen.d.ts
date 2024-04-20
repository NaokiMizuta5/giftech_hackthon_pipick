import { Suggestion } from '../types/suggestion';

export interface ISuggestionGen {
    generateSuggestions(): Promise<Suggestion[]>;
}
