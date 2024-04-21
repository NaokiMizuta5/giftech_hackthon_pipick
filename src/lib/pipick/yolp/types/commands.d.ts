import type { Device } from "../types/request";
import type { Output } from "../types/request";

export type BaseCommand = {
  appId: string;
  device: Device;
  output: Output;
  dist: number;
  lat: number;
  lon: number;
  results?: number;
  image: boolean;
};

export type AcceptableCommand = KeywordSearchCommand | GenreSearchCommand;

export type KeywordSearchCommand = BaseCommand & {
  query: string;
};

export type GenreSearchCommand = BaseCommand & {
  gc: string; // genre code
};
