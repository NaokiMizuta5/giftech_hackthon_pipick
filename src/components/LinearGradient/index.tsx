import { type Color, getThemeLinearColor } from "@/utils";
import { LinearGradient as GLinearGradient } from "@gluestack-ui/themed";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import type { ComponentProps, PropsWithChildren } from "react";
import type { DimensionValue } from "react-native";

type GLinearGradientProps = ComponentProps<typeof GLinearGradient>;

type Props = PropsWithChildren & {
  color: Color;
  height: GLinearGradientProps["height"];
  width: GLinearGradientProps["width"];
};

export function LinearGradient({ color, children, height, width }: Props) {
  const themeLinearColor = getThemeLinearColor(color);

  return (
    <GLinearGradient
      height={height}
      width={width}
      // @ts-ignore
      colors={themeLinearColor}
      start={[0, 0] as unknown as DimensionValue}
      end={[1, 0] as unknown as DimensionValue}
      as={ExpoLinearGradient}
    >
      {children}
    </GLinearGradient>
  );
}
