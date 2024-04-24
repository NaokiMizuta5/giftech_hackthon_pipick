// import { router } from "expo-router";
import { useRoutePathAtom } from "../../routePath";

export const useListButton = () => {
  const { lazyRouterPush } = useRoutePathAtom();
  const handlePress = () => {
    lazyRouterPush("list");
  };

  return {
    handlePress,
  };
};
