import { APP_ID, YOLP_API_URL } from "./config";
import type { AcceptableCommand } from "./types/commands";

export const toUTF8 = (str: string): string => {
  return encodeURIComponent(str);
};

export const createUrl = (command: AcceptableCommand): string => {
  const url = new URL(YOLP_API_URL);
  const params = { appid: APP_ID, ...command };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, toUTF8(value.toString()));
  }
  return url.toString();
};
