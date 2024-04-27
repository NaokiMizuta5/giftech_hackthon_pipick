import type {
  InitialIsLeftIconAtom,
  InitialIsRightIconAtom,
  InitialMenuItemsAtom,
  ListMenuItem,
  MenuItem,
} from "../types";

export const INITIAL_IS_LEFT_ICON_ATOM: InitialIsLeftIconAtom = false;
export const INITIAL_IS_RIGHT_ICON_ATOM: InitialIsRightIconAtom = false;
export const INITIAL_MENU_ITEMS_ATOM: InitialMenuItemsAtom = [
  {
    id: "1",
    menuName: "make",
    enCharacterName: "Meika",
    label: "つくる",
    active: true,
    color: "pink",
  },
  {
    id: "2",
    menuName: "play",
    enCharacterName: "Abbie",
    label: "あそぶ",
    active: false,
    color: "blue",
  },
  {
    id: "3",
    menuName: "eat",
    enCharacterName: "Coo",
    label: "たべる",
    active: false,
    color: "orange",
  },
  {
    id: "4",
    menuName: "watch",
    enCharacterName: "Milky",
    label: "みる",
    active: false,
    color: "green",
  },
];
export const INITIAL_CURRENT_MENU_ATOM: MenuItem = {
  id: "1",
  menuName: "make",
  enCharacterName: "Meika",
  label: "つくる",
  active: true,
  color: "pink",
};
export const INITIAL_LIST_MENU_ITEMS_ATOM: ListMenuItem[] = [
  {
    id: "0",
    label: "気になる",
    active: true,
  },
  {
    id: "1",
    label: "つくった",
    active: false,
  },
  {
    id: "2",
    label: "あそんだ",
    active: false,
  },
  {
    id: "3",
    label: "たべた",
    active: false,
  },
  {
    id: "4",
    label: "みた",
    active: false,
  },
];
