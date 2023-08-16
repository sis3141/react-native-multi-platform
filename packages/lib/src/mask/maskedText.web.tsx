import React from "react";
import { Text, TextProps } from "react-native";

export const LinearGradientText = ({
  startColor,
  endColor,
  ...props
}: React.PropsWithChildren<TextProps>) => (
  <Text
    {...props}
    style={[
      props.style,
      {
        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    ]}
  />
);

export const AngleGradientText = ({
  startColor,
  endColor,
  angle,
  ...props
}: React.PropsWithChildren<TextProps>) => (
  <Text
    {...props}
    style={[
      props.style,
      {
        background: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: "text",

        WebkitTextFillColor: "transparent",
      },
    ]}
  />
);
