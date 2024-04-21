import type { PropsWithChildren } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export function FadeInOutView({ children }: PropsWithChildren) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      {children}
    </Animated.View>
  );
}
