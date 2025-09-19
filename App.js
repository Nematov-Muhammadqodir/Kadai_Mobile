import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.rootScreen} edges={["top", "left", "right"]}>
      <HomePageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
});
