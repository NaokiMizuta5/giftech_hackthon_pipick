import { Suggestion } from "../../../suggestion/common/types/suggestion";

export interface ISuggestionRepository {
    get(id: string): Promise<Suggestion>;
    getAll(ids: string[]): Promise<Suggestion[]>;
    store(suggestions: Suggestion): Promise<void>;
    storeAll(suggestions: Suggestion[]): Promise<void>;
}

export interface IIdRepository {
    store(id: string): Promise<void>;
    storeAll(ids: string[]): Promise<void>;
}
