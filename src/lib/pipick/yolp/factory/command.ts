import type IYolpCommandFactory from "../interfaces/factory";

import type {
  GenreSearchCommand,
  KeywordSearchCommand,
} from "../types/commands";
import type Location from "../types/location";

import type { Device } from "../types/request";
import type { Output } from "../types/request";

class YolpCommandFactory implements IYolpCommandFactory {
  private readonly APP_ID = process.env.YOLP_APP_ID;
  private readonly DISTANCES = {
    // Distances in km
    NEAR: 1,
    MIDDLE: 10,
    FAR: 20, // Max distance
  };
  private readonly DEVICE: Device = "mobile";
  private readonly OUTPUT: Output = "json";

  public createKeywordSearchCommand(
    query: string,
    location: Location,
  ): KeywordSearchCommand {
    const baseCommand = this.createBaseCommand(location);
    return {
      ...baseCommand,
      query,
    };
  }

  public createGenreSearchCommand(
    gc: string,
    location: Location,
  ): GenreSearchCommand {
    const baseCommand = this.createBaseCommand(location);
    return {
      ...baseCommand,
      gc,
    };
  }

  private createBaseCommand(location: Location) {
    if (!this.APP_ID) {
      throw new Error("YOLP_APP_ID is not set in environment variables");
    }
    return {
      appId: this.APP_ID,
      device: this.DEVICE,
      output: this.OUTPUT,
      lat: location.lat,
      lon: location.lon,
      dist: this.DISTANCES.FAR,
      results: 100,
      image: true,
    };
  }
}

export default YolpCommandFactory;
