import type { AcceptableCommand } from "./types/commands";

export const toUTF8 = (str: string): string => {
  return encodeURIComponent(str);
};

export const createUrl = (
  strUrl: string,
  command: AcceptableCommand,
): string => {
  const url = new URL(strUrl);
  const params = { ...command };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, toUTF8(value.toString()));
  }
  return url.toString();
};
