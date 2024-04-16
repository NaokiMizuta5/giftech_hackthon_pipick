export type BaseCommand = {
  appId: string;
  device: "mobile";
  output: "json";
  lat: number;
  lon: number;
};

export type AcceptableCommand = KeywordSearchCommand | GenreSearchCommand;

export type KeywordSearchCommand = BaseCommand & {
  query: string;
};

export type GenreSearchCommand = BaseCommand & {
  gid: string;
};
