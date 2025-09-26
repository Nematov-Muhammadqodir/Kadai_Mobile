import { FlatList, View, StyleSheet } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import SearchInput from "../components/homePage/SearchInput";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import BigBanner from "../components/homePage/BigBanner";
import Categories from "../components/homePage/Categories";
import DiscountProductsList from "../components/homePage/DiscountProductsList";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import NewProductsList from "../components/homePage/NewProductsList";
import CountdownTimer from "../components/general/CountDownTimer";

export default function ProductsPage({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <CountdownTimer />,
    <Logo key="logo" handleRouter={handleRouter} />,
    <SearchInput key="search" />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <SmallAddBanner key="smallAdd" />,

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
