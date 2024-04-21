import type {
  GenreSearchCommand,
  KeywordSearchCommand,
} from "../types/commands";
import type Location from "../types/location";

interface IYolpCommandFactory {
  createKeywordSearchCommand(
    query: string,
    location: Location,
  ): KeywordSearchCommand;
  createGenreSearchCommand(gc: string, location: Location): GenreSearchCommand;
}

export default IYolpCommandFactory;
