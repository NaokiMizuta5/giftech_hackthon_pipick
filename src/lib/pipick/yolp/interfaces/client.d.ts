import type { AcceptableCommand } from "../types/commands";
import type YolpApiResponse from "../types/response";

interface IYolpApiClient {
  get(command: AcceptableCommand): Promise<YolpApiResponse>;
}

export default IYolpApiClient;
