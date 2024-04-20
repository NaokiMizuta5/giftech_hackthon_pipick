import { atom, useAtom, useAtomValue } from "jotai";
import {
  INITIAL_CHARACTERS_INFO_ATOM,
  INITIAL_CURRENT_CHARACTER_ID_ATOM,
} from "../constants";
import type { Character, CharacterId } from "../types";

export const charactersInfoAtom = atom<Character[]>(
  INITIAL_CHARACTERS_INFO_ATOM,
);

export const currentCharacterIdAtom = atom<CharacterId>(
  INITIAL_CURRENT_CHARACTER_ID_ATOM,
);

export const currentCharacterAtom = atom((get) => {
  return get(charactersInfoAtom).find((character) => {
    return character.id === get(currentCharacterIdAtom);
  });
});

export const useCharactersInfoAtom = () => {
  const [charactersInfo, setCharactersInfo] = useAtom(charactersInfoAtom);

  const getCharacterInfo = (characterId: CharacterId) => {
    return charactersInfo.find((character) => character.id === characterId);
  };

  const [currentCharacterId, _setCurrentCharacterId] = useAtom(
    currentCharacterIdAtom,
  );

  const setCurrentCharacterId = (characterId: CharacterId) => {
    _setCurrentCharacterId(characterId);
  };

  const currentCharacter = useAtomValue(currentCharacterAtom);

  const updateCharacterInfo = (character: Character) => {
    const newCharactersInfo = charactersInfo.map((_character) => {
      if (_character.id === character.id) {
        return character;
      }
      return _character;
    });
    setCharactersInfo(newCharactersInfo);
  };

  return {
    charactersInfo,
    currentCharacterId,
    setCurrentCharacterId,
    currentCharacter,
    getCharacterInfo,
    updateCharacterInfo,
  };
};
