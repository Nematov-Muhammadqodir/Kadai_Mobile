import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function RecommendationProductCard() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/products/Garlic_PhotoGrid-min.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>Kiwi</Text>
        <Text style={styles.productDescription}>This is description part</Text>
        <View style={styles.priceMainContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>120.00</Text>
            <Text style={styles.originPrice}>130.00</Text>
          </View>
          <Pressable style={({ pressed }) => [pressed && styles.btnPressed]}>
            <FontAwesome5 name="cart-plus" size={24} color={"green"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 335,
    height: 117,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gray800,
    padding: 17,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 95,
    height: 100,
  },
  image: {
    width: 95,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  productInfoContainer: {
    width: 223,
  },
  productName: { fontSize: 16, fontFamily: "open-sans-bold" },
  productDescription: {
    fontSize: 12,
    fontFamily: "open-sans",
  },
  priceMainContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  priceContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
  originPrice: {
    color: Colors.discountRedColor,
    textDecorationLine: "line-through",
  },
  btnPressed: {
    transform: [{ scale: 2 }],
  },
});
