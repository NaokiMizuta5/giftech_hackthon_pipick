import type { ImageSourcePropType } from "react-native";

const img_0 = require("./Images/0.png");
const img_1 = require("./Images/0.png");
const img_2 = require("./Images/0.png");
const img_3 = require("./Images/0.png");
const img_4 = require("./Images/0.png");
const img_5 = require("./Images/0.png");
const img_6 = require("./Images/0.png");
const img_7 = require("./Images/0.png");
const img_8 = require("./Images/0.png");
const img_9 = require("./Images/0.png");

export function getImages(length = 10): ImageSourcePropType[] {
  const imageList = [
    img_0,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
  ];
  if (length < 1) {
    return [];
  }

  if (length > imageList.length) {
    return [
      ...Array.from(
        { length: length / imageList.length },
        () => imageList,
      ).flat(),
      ...imageList.slice(0, length % imageList.length),
    ];
  }

  return imageList.slice(0, length - 1);
}
