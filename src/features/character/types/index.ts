export type CharacterId = "1" | "2" | "3" | "4";
export type EnCharacterName = "Meika" | "Abbie" | "Coo" | "Milky";
export type JaCharacterName = "メイカ" | "アビー" | "クウ" | "ミルキー";
export type Character = {
  id: CharacterId;
  enName: EnCharacterName;
  jaName: JaCharacterName;
  level: number;
  requireNext: number;
  currentStep: number;
};

export type InitialCharactersInfoAtom = Character[];

export type InitialCurrentCharacterIdAtom = CharacterId;
