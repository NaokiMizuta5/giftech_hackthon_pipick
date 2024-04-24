import { atom, useAtom } from "jotai";
import { useState } from "react";
import { useRoutePathAtom } from "../features/routePath";

const isStartedGameAtom = atom(false);

export const useStartGameAtom = () => {
  const { lazyRouterPush } = useRoutePathAtom();
  const [isStartedGame, setIsStartedGame] = useAtom(isStartedGameAtom);
  const [loading, setLoading] = useState(false);

  const startGame = () => {
    setLoading(true);
    setTimeout(() => {
      setIsStartedGame(true);
      setLoading(false);
      lazyRouterPush("home");
    }, 1500);
  };

  return {
    isStartedGame,
    startGame,
    loading,
  };
};
