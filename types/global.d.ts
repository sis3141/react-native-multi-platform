declare global {
  type RGB = `rgb(${number}, ${number}, ${number})`;
  type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
  type HEX = `#${string}`;

  type Color = RGB | RGBA | HEX;

  module "*.png";
  module "*.jpg";
  module "*.jpeg";
  module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }
}

export {};
