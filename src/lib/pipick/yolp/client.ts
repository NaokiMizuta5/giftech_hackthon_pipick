import axios from "axios";
import type { AcceptableCommand } from "./types/commands";
import type { YolpApiResponse } from "./types/response";
import { createUrl } from "./utils";

class YolpApiClient {
  async get(command: AcceptableCommand): Promise<YolpApiResponse> {
    const url = createUrl({ ...command });
    const fetchedResponse = await axios.get(url);
    const response: YolpApiResponse = fetchedResponse.data;
    return response;
  }
}

export default YolpApiClient;
