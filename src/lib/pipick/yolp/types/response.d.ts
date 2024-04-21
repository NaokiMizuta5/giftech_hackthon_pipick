// I used https://transform.tools/json-to-typescript
export interface YolpApiResponse {
  ResultInfo: ResultInfo;
  Feature: Feature[];
}

export interface ResultInfo {
  Count: number;
  Total: number;
  Start: number;
  Status: number;
  Description: string;
  Copyright: string;
  Latency: number;
}

export interface Feature {
  Id: string;
  Gid: string;
  Name: string;
  Geometry: Geometry;
  Category: string[];
  Description: string;
  // biome-ignore lint/suspicious/noExplicitAny: ignore rule
  Style?: any[];
  Property: Property;
}

export interface Geometry {
  Type: string;
  Coordinates: string;
}

export interface Property {
  Uid: string;
  CassetteId: string;
  Yomi: string;
  Country: Country;
  Address: string;
  GovernmentCode: string;
  AddressMatchingLevel: string;
  Tel1: string;
  Genre: Genre[];
  Area: Area[];
  Station: Station[];
  CatchCopy: string;
  LeadImage: string;
  ParkingFlag: string;
  SmartPhoneCouponFlag: string;
  Coupon: Coupon[];
  KeepCount: string;
}

export interface Country {
  Code: string;
  Name: string;
}

export interface Genre {
  Code: string;
  Name: string;
}

export interface Area {
  Code: string;
  Name: string;
}

export interface Station {
  Id: string;
  SubId: string;
  Name: string;
  Railway: string;
  Exit: string;
  ExitId: string;
  Distance: string;
  Time: string;
  Geometry: Geometry2;
}

export interface Geometry2 {
  Type: string;
  Coordinates: string;
}

export interface Coupon {
  Name: string;
  PcUrl: string;
  MobileFlag: string;
  SmartPhoneUrl: string;
}

export default YolpApiResponse;
