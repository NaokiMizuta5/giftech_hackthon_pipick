import type { EnCharacterName } from "@/features/character";
import type { Color } from "@/utils";

export type InitialIsLeftIconAtom = boolean;
export type InitialIsRightIconAtom = boolean;
export type MenuId = "1" | "2" | "3";
export type MenuItem = {
  id: MenuId;
  enCharacterName: EnCharacterName;
  label: string;
  active: boolean;
  color: Color;
};
export type InitialMenuItemsAtom = MenuItem[];
