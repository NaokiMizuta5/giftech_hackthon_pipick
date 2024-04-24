import { router } from "expo-router";
import { atom, useAtom, useAtomValue } from "jotai";
import type { Path } from "../types";

export const currentRoutePathAtom = atom("/home/");
export const isHomePathAtom = atom(
  (get) => get(currentRoutePathAtom) === "/home/",
);
export const isListPathAtom = atom(
  (get) => get(currentRoutePathAtom) === "/list/",
);
export const isSuggestPathAtom = atom(
  (get) => get(currentRoutePathAtom) === "/suggest/",
);

export const useRoutePathAtom = () => {
  const [currentRoutePath, setCurrentRoutePath] = useAtom(currentRoutePathAtom);
  type Href = typeof router.push;
  const routerPush: Href = (href) => {
    setCurrentRoutePath(href as string);
    router.push(href);
  };
  const isHomePath = useAtomValue(isHomePathAtom);
  const isListPath = useAtomValue(isListPathAtom);
  const isSuggestPath = useAtomValue(isSuggestPathAtom);

  const lazyRouterPush = (path: Path) => {
    switch (path) {
      case "back": {
        router.back();
        break;
      }
      case "home": {
        routerPush("/home/");
        break;
      }
      case "list": {
        routerPush("/list/");
        break;
      }
      case "suggest": {
        routerPush("/suggest/");
        break;
      }
    }
  };

  return {
    currentRoutePath,
    routerPush,
    lazyRouterPush,
    isHomePath,
    isListPath,
    isSuggestPath,
  };
};
