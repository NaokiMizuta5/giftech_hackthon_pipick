// import type { InitialCountAtom } from "../types";
// export const INITIAL_COUNT_ATOM: InitialCountAtom = 0;
import type { ScaledSize } from "react-native";
import { Dimensions } from "react-native";

import { isIos } from "../utils";

export const HEADER_HEIGHT = 100;

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

// export const window: ScaledSize = isWeb
//   ? {
//       ...Dimensions.get("window"),
//       width: 700,
//     }
//   : Dimensions.get("window");

export const window: ScaledSize = isIos
  ? {
      ...Dimensions.get("window"),
      width: 400, //widthこれでいいのか？
    }
  : Dimensions.get("window");
