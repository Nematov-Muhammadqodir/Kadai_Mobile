import { FlatList, View, StyleSheet } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import SmallAboutUsBanner from "../components/AboutUs/SmallAboutUsBanner";
export default function AboutUsScreen({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <Logo key="logo" />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <SmallAddBanner key="smallAdd" />,
    <SmallAboutUsBanner />,
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
