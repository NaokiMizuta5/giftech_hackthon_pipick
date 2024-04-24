import { useStartGameAtom } from "@/atom";
import { Button, ButtonText, Center, SafeAreaView } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useRoutePathAtom } from "../features/routePath";

export default function Splash() {
  const { isStartedGame, startGame } = useStartGameAtom();
  const { lazyRouterPush } = useRoutePathAtom();

  useEffect(() => {
    if (isStartedGame) {
      lazyRouterPush("home");
    }
  }, [isStartedGame]);

  return (
    <SafeAreaView>
      <Center height="$full">
        <Button onPress={() => startGame()}>
          <ButtonText>Start</ButtonText>
        </Button>
      </Center>
    </SafeAreaView>
  );
}
