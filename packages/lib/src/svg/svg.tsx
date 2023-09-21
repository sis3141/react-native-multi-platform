import { SvgProps } from "react-native-svg";

import { SVGProvider } from "./types";

interface ISVGLoader extends SVGProvider, SvgProps {}

export const SVGLoader = ({
  iconName,
  componentProvider,
  ...props
}: ISVGLoader) => {
  const Comp = componentProvider(iconName);
  return <Comp {...props} />;
};
