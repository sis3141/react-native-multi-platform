declare global {
  type RGB = `rgb(${number}, ${number}, ${number})`;
  type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
  type HEX = `#${string}`;

  type Color = RGB | RGBA | HEX;

  module "*.png";
  module "*.jpg";
  module "*.jpeg";
}

export {};
