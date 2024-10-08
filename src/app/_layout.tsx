import { useColorScheme } from "@/hooks";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Provider as JotaiProvider } from "jotai";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "gluestack",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("~/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [_styleLoaded, _setStyleLoaded] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // useLayoutEffect(() => {
  //   setStyleLoaded(true);
  // }, [styleLoaded]);

  // if (!loaded || !styleLoaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <JotaiProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Box height="$full" backgroundColor="$black">
              <Slot />
            </Box>
          </GestureHandlerRootView>
        </JotaiProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
