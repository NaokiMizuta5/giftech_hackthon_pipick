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
    label: "つくる",
    active: true,
  },
  {
    id: "2",
    label: "あそぶ",
    active: false,
  },
  {
    id: "3",
    label: "たべる",
    active: false,
  },
];
