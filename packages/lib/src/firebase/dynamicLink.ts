import dynamicLink from "@react-native-firebase/dynamic-links";

export const getInitialDynamicLink = dynamicLink().getInitialLink;
export const onNewDynamicLink = dynamicLink().onLink;
