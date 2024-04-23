import { Dimensions } from "react-native";
import type { ScaledSize } from "react-native";

export const getWindow = (): ScaledSize => Dimensions.get("window");
