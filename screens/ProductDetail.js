import { FlatList, View, StyleSheet, Text } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import SearchInput from "../components/homePage/SearchInput";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import Categories from "../components/homePage/Categories";
import DiscountProductsList from "../components/homePage/DiscountProductsList";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import NewProductsList from "../components/homePage/NewProductsList";
import ProductDetailBigBanner from "../components/productDetail/ProductDetailBigBanner";

export default function ProductDetail({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <Logo key="logo" />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <SmallAddBanner key="smallAdd" />,
    <ProductDetailBigBanner />,
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
