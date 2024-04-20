import { atom, useAtom } from "jotai";
import type { Color } from "../utils";

const colorThemeAtom = atom<Color>("pink");

export const useColorThemeAtom = () => {
  const [colorTheme, setColorTheme] = useAtom<Color>(colorThemeAtom);

  const setPinkTheme = () => {
    setColorTheme("pink");
  };

  const setOrangeTheme = () => {
    setColorTheme("orange");
  };

  const setGreenTheme = () => {
    setColorTheme("green");
  };

  const setBlueTheme = () => {
    setColorTheme("blue");
  };

  const setSelectedColorTheme = (color: Color) => {
    setColorTheme(color);
  };

  return {
    colorTheme,
    setPinkTheme,
    setOrangeTheme,
    setGreenTheme,
    setBlueTheme,
    setSelectedColorTheme,
  };
};
