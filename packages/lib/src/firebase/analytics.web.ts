import { initializeAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import * as firebaseConfig from "./firebaseWebConfig.json";
// add your firebase js sdk configureation - https://firebase.google.com/docs/web/learn-more#config-object

const analyticsConfig = {
  send_page_view: false,
  currency: "KRW",
  // soft_version :  // use as codepush version
};
const app = initializeApp(firebaseConfig);
const analytics = initializeAnalytics(app, {
  config: analyticsConfig, // you can additionally configure your codepush version with 'appVersion' field in config
});

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
