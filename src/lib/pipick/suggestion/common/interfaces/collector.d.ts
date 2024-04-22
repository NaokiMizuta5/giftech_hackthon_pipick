import type { YolpApiResponse } from "../../../yolp/types/response";

interface ICollector {
  collect(): Promise<YolpApiResponse[]>;
}

export default ICollector;
