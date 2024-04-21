import { Suggestion } from "../../../suggestion/common/types/suggestion";

export interface ISuggestionRepository {
    get(suggestionId: string): Promise<Suggestion>;
    getAll(suggestionIds: string[]): Promise<Suggestion[]>;
    store(suggestions: Suggestion): Promise<void>;
    storeAll(suggestions: Suggestion[]): Promise<void>;
}

export interface IIdRepository {
    store(suggestionId: string): Promise<void>;
    storeAll(suggestionIds: string[]): Promise<void>;
}
