import type {
  InitialCharactersInfoAtom,
  InitialCurrentCharacterIdAtom,
} from "../types";

export const INITIAL_CHARACTERS_INFO_ATOM: InitialCharactersInfoAtom = [
  {
    id: "1",
    menuId: "1",
    enName: "Meika",
    jaName: "メイカ",
    level: 1,
    requireNext: 1,
    currentStep: 0,
  },
  {
    id: "2",
    menuId: "2",
    enName: "Abbie",
    jaName: "アビー",
    level: 2,
    requireNext: 2,
    currentStep: 1,
  },
  {
    id: "3",
    menuId: "3",
    enName: "Coo",
    jaName: "クウ",
    level: 3,
    requireNext: 3,
    currentStep: 2,
  },
];

export const INITIAL_CURRENT_CHARACTER_ID_ATOM: InitialCurrentCharacterIdAtom =
  "1";
