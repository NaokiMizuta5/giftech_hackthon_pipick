export type CharacterId = "1" | "2" | "3";
export type EnCharacterName = "Meika" | "Abbie" | "Coo";
export type JaCharacterName = "メイカ" | "アビー" | "クウ";
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
