import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import { store } from "./store";
import { useApollo } from "./apollo/client";

// Screens
import HomePageScreen from "./screens/HomePageScreen";
import ProductDetail from "./screens/ProductDetail";
import AboutUsScreen from "./screens/AboutUsScreen";
import ProductsPage from "./screens/ProductsPage";
import Cart from "./screens/Cart";
import FAQ from "./screens/FAQ";

export default function App() {
  // Initialize Apollo Client
  const client = useApollo();

  // Local navigation state
  const [page, setPage] = useState("home");
  const [productId, setProductId] = useState("");

  // Load fonts
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  // Navigation handlers
  const handleRouter = (pageName) => setPage(pageName);
  const handleProductDetail = (id) => {
    setProductId(id);
    setPage("productDetail");
  };

  // Determine which screen to show
  let screen = (
    <HomePageScreen
      handleProductDetail={handleProductDetail}
      handleRouter={handleRouter}
    />
  );
  if (page === "aboutUs")
    screen = <AboutUsScreen handleRouter={handleRouter} />;
  if (page === "products")
    screen = <ProductsPage handleRouter={handleRouter} />;
  if (page === "cart") screen = <Cart handleRouter={handleRouter} />;
  if (page === "faq") screen = <FAQ handleRouter={handleRouter} />;
  if (page === "productDetail" && productId)
    screen = <ProductDetail handleRouter={handleRouter} />;

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView
          style={styles.rootScreen}
          edges={["top", "left", "right"]}
        >
          <ReduxProvider store={store}>{screen}</ReduxProvider>
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
