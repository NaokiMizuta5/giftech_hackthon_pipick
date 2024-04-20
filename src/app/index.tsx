// import { Counter } from "../features/counter";
import { useStartGameAtom } from "@/atom";
// import { DBHealthCheck } from "@/db/components";
import { Button, ButtonText, Center, SafeAreaView } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Splash() {
  const { isStartedGame, startGame } = useStartGameAtom();

  useEffect(() => {
    if (isStartedGame) {
      router.push("/home/");
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
