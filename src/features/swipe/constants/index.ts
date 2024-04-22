// import type { InitialCountAtom } from "../types";
// export const INITIAL_COUNT_ATOM: InitialCountAtom = 0;
import type { ScaledSize } from "react-native";
import { Dimensions } from "react-native";

import { isIos } from "../utils";

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
      height: 800, //height:微調整可能
      width: 400, //width:微調整可能
    }
  : Dimensions.get("window");
