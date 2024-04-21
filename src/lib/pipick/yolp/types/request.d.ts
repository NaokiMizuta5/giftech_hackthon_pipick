import type { Float } from "react-native/Libraries/Types/CodegenTypes";

export type Device = "mobile";
export type SrotKey =
  | "rating"
  | "score"
  | "hybrid"
  | "review"
  | "kana"
  | "price"
  | "dist"
  | "geo"
  | "match"
  | "-rating"
  | "-score"
  | "-hybrid"
  | "-review"
  | "-kana"
  | "-price"
  | "-dist"
  | "-geo"
  | "-match";
export type Detail = "simple" | "standard" | "full";
export type Output = "json" | "xml";
export type Reservation = "1";

export type YolpApiRequest = YolpApiRequestRequired &
  YolpApiRequestCustomRequired &
  YolpApiRequestOptional;

export type YolpApiRequestRequired = {
  // Required by YOLP API
  appID: string; // Client ID
};

export type YolpApiRequestCustomRequired = {
  // Required by our application
  output: "json";
  device: "mobile";
  lat: Float;
  lon: Float;
};

// @see https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/localsearch.html#request-param
export type YolpApiRequestOptional = {
  device?: Device; // Device type
  query?: string; // Search keyword encoded in UTF-8
  cid?: string; // cassette ID
  uid?: string; // User ID
  gid?: string; // Genre ID
  id?: string; // ID
  bid?: string; // Building ID
  group?: string; // group by Entity Matching
  distinct?: boolean; // whether to remove duplicates
  sort?: SrotKey; // select sort key
  start?: number; // start position to fetch data (max 3000)
  results?: number; // number of results to fetch (max 100)
  detail?: Detail; // select detail level
  output?: Output; // select output format
  callback?: string; // callback function name
  lat?: Float; // latitude
  lon?: Float; // longitude
  dist?: Float; // distance of search area
  bbox?: string; // bounding box
  ac?: string; // area code
  gc?: string; // genre code
  coupon?: boolean; // whether to include coupon information
  parking?: boolean; // whether to include parking information
  smoking?: string; // select by smoking type
  reservation?: Reservation; // whether to include reservation information
  image?: boolean; // whether to include image information
  open?: string; // opening hours
  loco_mode?: boolean; // turn on loco mode
  maxprice?: number; // maximum price
  minprice?: number; // minimum price
};
