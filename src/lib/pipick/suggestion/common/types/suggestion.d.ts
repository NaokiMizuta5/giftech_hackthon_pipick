export type Suggestion = {
  // TODO: design what properties are required
  name: string;
  description: string;
  address: string;
  distance: number;
  // Google Maps URLを取るなら、Google Maps APIを使う必要がありそう。
  url: string;
};
