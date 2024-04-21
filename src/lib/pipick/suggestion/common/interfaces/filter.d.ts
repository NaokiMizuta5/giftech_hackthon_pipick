import type Suggestion from "../types/suggestion";
interface IFilters {
  apply(suggestions: Suggestion[]): Promise<Suggestion[]>;
}

export default IFilters;
