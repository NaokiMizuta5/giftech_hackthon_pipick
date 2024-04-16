import { APP_ID, YOLP_API_URL } from "./config";
import type { AcceptableCommand } from "./types/commands";

export const createUrl = (command: AcceptableCommand): string => {
  const url = new URL(YOLP_API_URL);
  const params = { appid: APP_ID, ...command };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, String(value));
  }
  return url.toString();
};
