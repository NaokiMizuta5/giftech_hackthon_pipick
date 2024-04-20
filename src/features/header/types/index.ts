import type { Color } from "~/src/utils";

export type InitialIsLeftIconAtom = boolean;
export type InitialIsRightIconAtom = boolean;
export type MenuItem = {
  id: string;
  label: string;
  active: boolean;
  color: Color;
};
export type InitialMenuItemsAtom = MenuItem[];
