import axios from "axios";

import type IYolpApiClient from "./interfaces/client";
import type { AcceptableCommand } from "./types/commands";
import type { YolpApiResponse } from "./types/response";
import { createUrl } from "./utils";

class YolpApiClient implements IYolpApiClient {
  private readonly YOLP_API_URL =
    "https://map.yahooapis.jp/search/local/V1/localSearch";

  async get(command: AcceptableCommand): Promise<YolpApiResponse> {
    const url = createUrl(this.YOLP_API_URL, command);
    const fetchedResponse = await axios.get(url);
    const response: YolpApiResponse = fetchedResponse.data;
    return response;
  }
}

export default YolpApiClient;
