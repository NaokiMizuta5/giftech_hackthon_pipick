import type { YolpApiResponse } from "../../../yolp/types/response";

export interface ICollector {
  collect(): Promise<YolpApiResponse[]>;
}
