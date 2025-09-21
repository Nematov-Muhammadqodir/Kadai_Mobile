import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";

export default function ProductInfo() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.name_desc_container}>
        <Text style={styles.name}>Banana</Text>
        <Text style={styles.description}>Best Banana from Taiwan</Text>
      </View>
      <View style={styles.border}></View>
      <View style={styles.productDetailContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.discPriceCont}>
            <AntDesign name="check-circle" size={34} color="green" />
            <Text style={styles.discountedPrice}>￦12000</Text>
          </View>
          <Text style={styles.originPrice}>￦14000</Text>
        </View>
        <View style={styles.inStockContainer}>
          <Text style={styles.inStockFirst}>
            <Octicons name="dot-fill" size={24} color="#17B63A" />
            In Stock
          </Text>
          <Text style={styles.inStockSecond}>
            In stock, ready to be shipped.
          </Text>
        </View>
      </View>
      <View style={styles.moreInfoContainer}>
        <View>
          <Text>
            <Text style={styles.main}>Type:</Text> Fruits
          </Text>
          <Text>
            <Text style={styles.main}>Origin:</Text> Korea
          </Text>
          <Text>
            <Text style={styles.main}>Discount:</Text> 10%
          </Text>
          <Text>
            <Text style={styles.main}>Vendor:</Text> Khamidova
          </Text>
        </View>
        <View>
          <Text>
            <Text style={styles.main}>Product Views:</Text> 3
          </Text>
          <Text>
            <Text style={styles.main}>Product Likes:</Text> 3
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  name_desc_container: {
    gap: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: 16,
    color: Colors.green900,
  },
  border: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.gray800,
  },
  productDetailContainer: {},
  discPriceCont: { flexDirection: "row-reverse", alignItems: "center", gap: 5 },
  priceContainer: {
    flexDirection: "row",
    gap: 13,
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 35,
    fontFamily: "open-sans-bold",
    color: Colors.green900,
  },
  originPrice: {
    color: Colors.discountRedColor,
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  inStockContainer: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    gap: 10,
  },
  inStockFirst: {
    color: "#17B63A",
    fontSize: 22,
    fontFamily: "open-sans-bold",
  },
  inStockSecond: {
    color: "#707070",
    fontSize: 16,
    fontFamily: "open-sans",
  },
  moreInfoContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});
