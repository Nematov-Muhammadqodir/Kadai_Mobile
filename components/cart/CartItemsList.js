import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const cartItems = [1, 2, 3, 4];
  return (
    <View style={styles.wrapper}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.yourCartTextContainer}>
            <Text style={styles.mainHeader}>Your Cart</Text>
            <Ionicons name="bag-handle-sharp" size={24} color={"pink"} />
          </View>
          <Text style={styles.secondaryHeader}>5 Products In Your Cart</Text>
        </View>
        <View style={styles.cartItemsContainer}>
          {cartItems.map((cartItem) => {
            return <CartItem />;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contentContainer: {},
  headerContainer: { marginBottom: 10 },
  yourCartTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  mainHeader: { fontFamily: "open-sans-bold", fontSize: 26 },
  secondaryHeader: {},
  cartItemsContainer: {
    width: 370,
    borderWidth: 1,
    height: "auto",
    borderRadius: 8,
    borderColor: Colors.gray800,
    padding: 10,
    gap: 10,
  },
});
