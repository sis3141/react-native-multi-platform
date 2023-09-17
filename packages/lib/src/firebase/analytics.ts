import analytics from "@react-native-firebase/analytics";

const analyticsConfig = {
  currency: "KRW",
  // soft_version :  // use as codepush version
};

analytics().setDefaultEventParameters(analyticsConfig);

export const FA = {
  /*
    log functions
    make sure you have same interface with web/app
    ex) 
    signUp({...}) {
      logEvent(analytics, 'sign_up', ...)
    }
  */
};
