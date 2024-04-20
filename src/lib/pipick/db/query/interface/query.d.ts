import { Suggestion } from "../../../suggestion/common/types/suggestion";

export interface ISuggestionQuery {
    allExperienced(): Promise<Suggestion[]>;
    seenIds(): Promise<string[]>;
}

type ExistedIds = string[];

export interface IIdQuery {
    exists(id: string): Promise<boolean>;
    existsAny(ids: string[]): Promise<ExistedIds>;
}
