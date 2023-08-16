import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LocalStorage, LottieView, envConfig, initNetCheck } from "@athler/lib";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

import { LOTTIE } from "./assets/localAssetMap";
import LogoSrc from "./logo.png";

const hello = 0; //test code for lint check
// console.log(hello);

const Stack = createStackNavigator();

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
  useEffect(() => {
    initNetCheck().then((netCheckRes) => {
      console.log("net check res : ", netCheckRes);
    });
    axiosTest();
  }, []);

  console.log("env info : ", envConfig, process.env);
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image style={styles.logo} source={LogoSrc} />
        <Text style={styles.text}>Hello from React Native!</Text>
        <View style={styles.platformRow}>
          <Text style={styles.text}>Platform: </Text>
          <View style={styles.platformBackground}>
            <Text style={styles.platformValue}>{Platform.OS}</Text>
          </View>
        </View>

        <Button
          onPress={async () => {
            await LocalStorage.setItem(
              "hello",
              Math.random().toString(36).substr(2, 5)
            );
            const res = await LocalStorage.getItem("hello");
            setLocalValue(res || "");
          }}
          title="Update local value"
        />
        <Text style={styles.text}>{`local storage val! : ${localValue}`}</Text>

        <Text style={[styles.text, { marginTop: 20 }]}>LottieView</Text>
        <LottieView
          source={LOTTIE.testLottie}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
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
    fontSize: 28,
    fontWeight: "600",
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
