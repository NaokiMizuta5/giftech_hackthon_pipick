import type IYolpApiClient from "../../../yolp/interfaces/client";
import type IYolpCommandFactory from "../../../yolp/interfaces/factory";
// types
import type Location from "../../../yolp/types/location";
import type { YolpApiResponse } from "../../../yolp/types/response";
// interfaces
import type ICollector from "../interfaces/collector";

abstract class BaseCollector implements ICollector {
  private readonly location: Location;
  private readonly client: IYolpApiClient;
  private readonly factory: IYolpCommandFactory;

  protected abstract GENRE_CODES: { [key: string]: string };

  constructor(
    location: Location,
    client: IYolpApiClient,
    factory: IYolpCommandFactory,
  ) {
    this.client = client;
    this.location = location;
    this.factory = factory;
  }

  abstract collect(): Promise<YolpApiResponse[]>;

  protected async fetchByGenre(gc: string): Promise<YolpApiResponse> {
    const command = this.factory.createGenreSearchCommand(gc, this.location);
    const response = await this.client.get(command);
    return response;
  }
}

export default BaseCollector;
