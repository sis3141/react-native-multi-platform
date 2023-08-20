import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextProps,
  View,
} from "react-native";

import { getDeviceInfo } from "@athler/platform-lib/device-info";
import { envConfig } from "@athler/platform-lib/dotenv";
import { FastImage } from "@athler/platform-lib/fast-image";
import {
  COOKIE_KEYS,
  LocalStorage,
  cookieController,
} from "@athler/platform-lib/localstorage";
import { LottieView } from "@athler/platform-lib/lottie";
import { AngleGradientText } from "@athler/platform-lib/mask";
import { initNetCheck } from "@athler/platform-lib/net-info";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

import { LOTTIE } from "./assets/localAssetMap";
import LogoSrc from "./logo.png";

const hello = 0; //test code for lint check
// console.log(hello);

const Stack = createStackNavigator();

const TestMaskText = (props: TextProps) => (
  <AngleGradientText
    {...props}
    startColor={"rgba(216, 60, 255, 1)"}
    endColor={"rgba(37, 164, 255, 1)"}
    angle={131}
  />
);

async function axiosTest() {
  console.log("try axios :", axios);
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("axios ress!", res);
  } catch (error) {
    console.log("error from axios ...", error);
  }
}

function HomeScreen() {
  const [localValue, setLocalValue] = useState("");
  const [cookieValue, setCookieValue] = useState("");
  useEffect(() => {
    initNetCheck().then((netCheckRes) => {
      console.log("net check res : ", netCheckRes);
    });
    console.log("env info : ", envConfig, process.env);
    console.log("app ver ", getDeviceInfo.version());
    axiosTest();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Image style={styles.logo} source={LogoSrc} />
        <Text style={[styles.text]}>this is Image!</Text>
        <FastImage style={styles.logo} source={LogoSrc} />
        <Text style={styles.text}>this is FastImage!</Text>
        <View style={styles.platformRow}>
          <Text style={styles.text}>Platform: </Text>
          <View style={styles.platformBackground}>
            <Text style={styles.platformValue}>{Platform.OS}</Text>
          </View>
        </View>

        <Button
          onPress={() => {
            LocalStorage.set("hello", Math.random().toString(36).substr(2, 5));
            const res = LocalStorage.getString("hello");
            setLocalValue(res || "");
          }}
          title="Update local value"
        />
        <Text
          style={styles.text}
        >{`check local storage val! : ${localValue}`}</Text>
        <Button
          onPress={() => {
            cookieController.set(
              COOKIE_KEYS.REFRESH_TOKEN,
              Math.random().toString(36).substr(2, 5)
            );
            const res = cookieController.get(COOKIE_KEYS.REFRESH_TOKEN);
            setCookieValue(res || "");
          }}
          title="Update cookie value"
        />
        <Text style={styles.text}>{`check cookie val! : ${cookieValue}`}</Text>

        <LottieView
          source={LOTTIE.testLottie}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
        <Text style={[styles.text, { marginTop: 20 }]}>this is LottieView</Text>

        <TestMaskText style={styles.text}>
          This is masked gradient text
        </TestMaskText>
      </ScrollView>
    </SafeAreaView>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});

export default App;
