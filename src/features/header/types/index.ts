import type { CharacterId } from "@/features/character";
import type { Color } from "@/utils";

export type InitialIsLeftIconAtom = boolean;
export type InitialIsRightIconAtom = boolean;
export type MenuItem = {
  id: string;
  characterId: CharacterId;
  label: string;
  active: boolean;
  color: Color;
};
export type InitialMenuItemsAtom = MenuItem[];
