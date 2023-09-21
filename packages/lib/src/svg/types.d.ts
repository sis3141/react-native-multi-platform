import { ImageSourcePropType } from "react-native";

interface SVGProvider {
  componentProvider(iconName: string): React.FC;
  iconName: string;
}
