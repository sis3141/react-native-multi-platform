import React from "react";
import { Text } from "react-native";

import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

import { GradientTextProps } from "./types";

export const LinearGradientText = ({
  startColor,
  endColor,
  ...props
}: React.PropsWithChildren<GradientTextProps>) => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient
      colors={[startColor, endColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text {...props} style={[props.style, { opacity: 0 }]} />
    </LinearGradient>
  </MaskedView>
);

export const AngleGradientText = ({
  startColor,
  endColor,
  angle,
  ...props
}: React.PropsWithChildren<GradientTextProps>) => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient
      colors={[startColor, endColor]}
      useAngle={true}
      angle={angle}
    >
      <Text {...props} style={[props.style, { opacity: 0 }]} />
    </LinearGradient>
  </MaskedView>
);
