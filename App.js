import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useState } from "react";
import ProductDetail from "./screens/ProductDetail";

export default function App() {
  const [productId, setProductDetailId] = useState("");
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const handleProductDetail = (id) => {
    setProductDetailId(id);
  };

  let screen = <HomePageScreen handleProductDetail={handleProductDetail} />;

  if (productId !== "") {
    screen = <ProductDetail />;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.rootScreen} edges={["top", "left", "right"]}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
});
