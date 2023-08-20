import { TextProps } from "react-native";

export interface GradientTextProps extends TextProps {
  startColor: Color;
  endColor: Color;
  angle?: number;
}
