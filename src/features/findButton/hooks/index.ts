import { useRoutePathAtom } from "@/features/routePath";

export const useFindButton = () => {
  const { lazyRouterPush } = useRoutePathAtom();

  const handlePress = () => {
    lazyRouterPush("suggest");
  };

  return {
    handlePress,
  };
};
