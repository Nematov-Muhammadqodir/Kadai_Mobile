import { FlatList, View, StyleSheet, Text } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import Footer from "../components/general/Footer";
import BlogsList from "../components/homePage/BlogsList";
import ProductDetailBigBanner from "../components/productDetail/ProductDetailBigBanner";
import ProductInfo from "../components/productDetail/ProductInfo";
import AddProduct from "../components/productDetail/AddProduct";
import DeliveryReturn from "../components/productDetail/Delivery&Return";
import ReviewsList from "../components/productDetail/ReviewsList";
import LeaveReview from "../components/productDetail/LeaveReview";
import { LinearGradient } from "react-native-svg";
import HorizontalLine from "../components/general/HorizontalLine";

export default function ProductDetail({ handleRouter }) {
  const components = [
    <SaleSmallBanner key="sale" />,
    <Logo key="logo" />,
    <Routes key="routes" handleRouter={handleRouter} />,
    <SmallAddBanner key="smallAdd" />,
    <ProductDetailBigBanner key={"productDetailBigBanner"} />,
    <ProductInfo key={"productInfo"} />,
    <AddProduct key={"addProduct"} />,
    <DeliveryReturn key={"deliveryReturn"} />,
    <ReviewsList key={"reviewsList"} />,
    <LeaveReview key={"leaveReview"} />,
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
