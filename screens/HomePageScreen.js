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

export default function HomePageScreen({ handleProductDetail, handleRouter }) {
  const sections = [
    { id: "sale", component: SaleSmallBanner },
    { id: "logo", component: () => <Logo handleRouter={handleRouter} /> },
    { id: "search", component: SearchInput },
    { id: "routes", component: () => <Routes handleRouter={handleRouter} /> },
    { id: "smallAdd", component: SmallAddBanner },
    { id: "big", component: BigBanner },
    { id: "categories", component: Categories },
    {
      id: "discountProductsList",
      component: () => (
        <DiscountProductsList handleProductDetail={handleProductDetail} />
      ),
    },
    { id: "newProductsList", component: NewProductsList },
    { id: "blogs", component: BlogsList },
    { id: "footer", component: Footer },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const Component = item.component;
        return <Component />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 20, // optional: adds space at bottom for scrolling
  },
});
