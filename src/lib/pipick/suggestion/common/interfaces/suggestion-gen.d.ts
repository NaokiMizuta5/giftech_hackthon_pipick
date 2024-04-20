import { Suggestion } from '../types/suggestion';

export interface ISuggestionGen {
    async generateSuggestions(): Promise<Suggestion[]>;
}
