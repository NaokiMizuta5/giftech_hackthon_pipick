import { atom, useAtom } from "jotai";

export const isStartedGameAtom = atom(false);

export const useGlobalAtom = () => {
  const [isStartedGame, setIsStartedGame] = useAtom(isStartedGameAtom);

  const startGame = () => {
    setIsStartedGame(true);
  };

  return {
    isStartedGame,
    startGame,
  };
};
