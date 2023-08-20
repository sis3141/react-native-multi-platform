import React from "react";
import { Text } from "react-native";

import { GradientTextProps } from "./types";

declare module "react-native" {
  interface TextStyle {
    Background?: string | undefined;
    WebkitBackgroundClip?: string | undefined;
    WebkitTextFillColor?: string | undefined;
  }
}

export const LinearGradientText: React.FC<GradientTextProps> = ({
  startColor,
  endColor,
  ...props
}: GradientTextProps) => (
  <Text
    {...props}
    style={[
      props.style,
      {
        Background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    ]}
  />
);
export const AngleGradientText: React.FC<GradientTextProps> = ({
  startColor,
  endColor,
  angle,
  ...props
}: GradientTextProps) => (
  <Text
    {...props}
    style={[
      props.style,
      {
        Background: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    ]}
  />
);
