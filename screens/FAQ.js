import { FlatList, View, StyleSheet } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import Routes from "../components/homePage/Routes";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import FaqBanner from "../components/FAQ/faqBanner";

export default function FAQ({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <Logo key="logo" handleRouter={handleRouter} />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <FaqBanner key="FaqBanner" />,
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

const styles = StyleSheet.create({ container: {} });
