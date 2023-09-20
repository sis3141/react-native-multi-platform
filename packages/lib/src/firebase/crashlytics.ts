import crashlytics from "@react-native-firebase/crashlytics";

export const setCrashlyticsAttribute = async (signObj: SignInfo) => {
  const { id, ...restInfo } = signObj;
  await crashlytics().setUserId(String(id));
  crashlytics().setAttributes({
    ...restInfo,
    // soft_version // use codepush version
  });
};

export const CrashLogger = {
  helperLog: (text: string) => {
    crashlytics().log(text);
    console.log("🔔[crashlytics log] ", text);
  },
  errorLog: (error: Error, jsErrorName: string) => {
    crashlytics().recordError(error, jsErrorName);
  },
};
