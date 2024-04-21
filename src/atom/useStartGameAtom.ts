import { atom, useAtom } from "jotai";

const isStartedGameAtom = atom(false);

export const useStartGameAtom = () => {
  const [isStartedGame, setIsStartedGame] = useAtom(isStartedGameAtom);

  const startGame = () => {
    setIsStartedGame(true);
  };

  return {
    isStartedGame,
    startGame,
  };
};
