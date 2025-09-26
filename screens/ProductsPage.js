import { FlatList, View, StyleSheet } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import CountdownTimer from "../components/general/CountDownTimer";
import ProductsBigBanner from "../components/products/ProductsBigBanner";
import SearchProductsBar from "../components/products/SearchProductsBar";

export default function ProductsPage({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <CountdownTimer />,
    <Logo key="logo" handleRouter={handleRouter} />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <SmallAddBanner key="smallAdd" />,
    <SearchProductsBar />,
    <ProductsBigBanner />,
    <BlogsList key="blogs" />,
    <Footer key="footer" />,
  ];
  return (
    <FlatList
      data={components}
      renderItem={({ item }) => <View>{item}</View>}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 20, // optional: adds space at bottom for scrolling
  },
});
