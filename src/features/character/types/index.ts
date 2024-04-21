import type { MenuId } from "@/features/header";

export type CharacterId = "1" | "2" | "3";
export type Character = {
  id: CharacterId;
  menuId: MenuId;
  enName: "Meika" | "Abbie" | "Coo";
  jaName: "メイカ" | "アビー" | "クウ";
  level: number;
  requireNext: number;
  currentStep: number;
};

export type InitialCharactersInfoAtom = Character[];

export type InitialCurrentCharacterIdAtom = CharacterId;
