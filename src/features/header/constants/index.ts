import type {
  InitialIsLeftIconAtom,
  InitialIsRightIconAtom,
  InitialMenuItemsAtom,
} from "../types";

export const INITIAL_IS_LEFT_ICON_ATOM: InitialIsLeftIconAtom = false;
export const INITIAL_IS_RIGHT_ICON_ATOM: InitialIsRightIconAtom = false;
export const INITIAL_MENU_ITEMS_ATOM: InitialMenuItemsAtom = [
  {
    id: "1",
    enCharacterName: "Meika",
    label: "つくる",
    active: true,
    color: "pink",
  },
  {
    id: "2",
    enCharacterName: "Abbie",
    label: "あそぶ",
    active: false,
    color: "blue",
  },
  {
    id: "3",
    enCharacterName: "Coo",
    label: "たべる",
    active: false,
    color: "orange",
  },
];
