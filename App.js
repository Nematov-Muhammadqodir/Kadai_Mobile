import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useState } from "react";
import ProductDetail from "./screens/ProductDetail";
import AboutUsScreen from "./screens/AboutUsScreen";
import { Provider as PaperProvider } from "react-native-paper"; // add this
import ProductsPage from "./screens/ProductsPage";
import Cart from "./screens/Cart";
import FAQ from "./screens/FAQ";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const [productId, setProductDetailId] = useState("");
  const [page, setPage] = useState("home");
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const handleProductDetail = (id) => {
    setProductDetailId(id);
    setPage("productDetail");
  };

  const handleRouter = (page) => {
    setPage(page);
  };

  let screen = (
    <HomePageScreen
      handleProductDetail={handleProductDetail}
      handleRouter={handleRouter}
    />
  );

  if (page === "home") {
    screen = (
      <HomePageScreen
        handleProductDetail={handleProductDetail}
        handleRouter={handleRouter}
      />
    );
  }
  if (page === "aboutUs") {
    screen = <AboutUsScreen handleRouter={handleRouter} />;
  }
  if (page === "products") {
    screen = <ProductsPage handleRouter={handleRouter} />;
  }
  if (page === "cart") {
    screen = <Cart handleRouter={handleRouter} />;
  }
  if (page === "faq") {
    screen = <FAQ handleRouter={handleRouter} />;
  }

  if (productId !== "" && page === "productDetail") {
    screen = <ProductDetail handleRouter={handleRouter} />;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView
          style={styles.rootScreen}
          edges={["top", "left", "right"]}
        >
          <Provider store={store}>{screen}</Provider>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
});
