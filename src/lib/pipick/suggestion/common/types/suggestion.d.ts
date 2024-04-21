type Suggestion = {
  // TODO: design what properties are required
  id: string;
  name: string;
  description: string;
  address: string;
  // Google Maps URLを取るなら、Google Maps APIを使う必要がありそう。
  imageUri: string;
  googleMapUri: string;
  tags: string[];
};

export default Suggestion;
