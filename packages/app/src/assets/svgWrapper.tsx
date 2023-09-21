import { SVGLoader } from "@athler/platform-lib/svg";

import * as iconFiles from "./svgAssetMap";

const componentProvider = (iconName: keyof typeof iconFiles) =>
  iconFiles[iconName];
export const Svg = (iconName: string) => (
  <SVGLoader iconName={iconName} componentProvider={componentProvider} />
);
