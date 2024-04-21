import { APP_ID } from "../config";
import type {
  GenreSearchCommand,
  KeywordSearchCommand,
} from "../types/commands";
import type { Location } from "../types/location";

export interface IYolpCommandFactory {
  createKeywordSearchCommand(
    query: string,
    location: Location,
  ): KeywordSearchCommand;
  createGenreSearchCommand(gid: string, location: Location): GenreSearchCommand;
}

export class YolpCommandFactory implements IYolpCommandFactory {
  private readonly APP_ID = APP_ID;

  public createKeywordSearchCommand(
    query: string,
    location: Location,
  ): KeywordSearchCommand {
    return {
      appId: this.APP_ID,
      device: "mobile",
      output: "json",
      lat: location.lat,
      lon: location.lon,
      query,
    };
  }

  public createGenreSearchCommand(
    gid: string,
    location: Location,
  ): GenreSearchCommand {
    return {
      appId: this.APP_ID,
      device: "mobile",
      output: "json",
      lat: location.lat,
      lon: location.lon,
      gid,
    };
  }
}
