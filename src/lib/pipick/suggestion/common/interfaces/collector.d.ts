import { Suggestion } from '../types/suggestion';

export interface ICollector {
    collect(): Promise<Suggestion[]>;
}
