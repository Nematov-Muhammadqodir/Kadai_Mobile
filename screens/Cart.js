import { View, Text, FlatList, StyleSheet } from "react-native";
import Layout from "../components/general/Layout";
import Footer from "../components/general/Footer";
import CartItemsList from "../components/cart/CartItemsList";

export default function Cart({ handleRouter }) {
  const components = [
    <Layout handleRouter={handleRouter} key={"Layout"} />,
    <CartItemsList key={"CartItemsList"} />,
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
  container: {},
});
