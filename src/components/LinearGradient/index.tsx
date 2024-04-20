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
  borderRadius?: GLinearGradientProps["borderRadius"];
  borderTopLeftRadius?: GLinearGradientProps["borderTopLeftRadius"];
  borderTopRightRadius?: GLinearGradientProps["borderTopRightRadius"];
  borderBottomLeftRadius?: GLinearGradientProps["borderBottomLeftRadius"];
  borderBottomRightRadius?: GLinearGradientProps["borderBottomRightRadius"];
};

export function LinearGradient({
  color,
  children,
  height,
  width,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}: Props) {
  const themeLinearColor = getThemeLinearColor(color);

  return (
    <GLinearGradient
      start={[0, 0] as unknown as DimensionValue}
      end={[1, 0] as unknown as DimensionValue}
      as={ExpoLinearGradient}
      // @ts-ignore
      colors={themeLinearColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
    >
      {children}
    </GLinearGradient>
  );
}
