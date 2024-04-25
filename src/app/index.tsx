import { useStartGameAtom } from "@/atom";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Image,
  ImageBackground,
  SafeAreaView,
  Spinner,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function Splash() {
  const { startGame, loading } = useStartGameAtom();
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("$white");
  const handlePressIn = () => {
    setButtonBackgroundColor("$warmGray400");
  };
  const handlePressOut = () => {
    setButtonBackgroundColor("$white");
  };

  return (
    <Box height="$full" width="$full">
      <ImageBackground
        source={require("~/assets/images/background-image.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
        opacity={loading ? 0.5 : 1}
      >
        <SafeAreaView>
          <Center height="$full" position="relative">
            <Image
              alt="pipick icon"
              source={require("~/assets/images/background-icon-image.png")}
              style={{
                width: 200,
                height: 200,
              }}
            />
            {loading && (
              <Center position="absolute" width="$full">
                <Spinner size="large" color="$white" />
              </Center>
            )}
            <Center position="absolute" width="$full" bottom={80}>
              <Button
                size="lg"
                width="$64"
                borderRadius="$full"
                backgroundColor={buttonBackgroundColor}
                onPress={() => startGame()}
                onPressOut={handlePressOut}
                onPressIn={handlePressIn}
              >
                <ButtonText color="$black">スタート</ButtonText>
              </Button>
            </Center>
          </Center>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}
