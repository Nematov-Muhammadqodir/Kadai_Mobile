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

export default function HomePageScreen() {
  const components = [
    <SaleSmallBanner key="sale" />,
    <Logo key="logo" />,
    <SearchInput key="search" />,
    <Routes key="routes" />,
    <SmallAddBanner key="smallAdd" />,
    <BigBanner key="big" />,
    <Categories key="categories" />,
    <DiscountProductsList key="discountProductsList" />,
    <NewProductsList key="newProductsList" />,
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
