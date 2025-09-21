import { View, StyleSheet, Image, Text } from "react-native";
import AddToCartBtn from "../general/AddToCartBtn";
import AddToCartRounded from "../general/AddToCardRounded";

export default function NewProductCard({ item }) {
  return (
    <View key={item.name} style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/products/melon.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₩{item.price}</Text>
          <View style={styles.discountContainer}>
            <Text style={styles.discountAmount}>-{item.discountAmount}%</Text>
          </View>
        </View>
      </View>
      <AddToCartRounded />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 168,
    height: 231,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 105,
  },
  image: { height: 115, width: 100 },
  descContainer: {},
  name: { fontSize: 18, fontFamily: "open-sans-bold", letterSpacing: 2 },
  description: {
    fontSize: 12,
    fontFamily: "open-sans",
    fontWeight: 500,
    position: "relative",
  },
  priceContainer: {
    marginTop: 5,
    flexDirection: "row",
    gap: 5,
    marginTop: 15,
  },
  price: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  discountContainer: {
    width: 40,
    height: 20,
    backgroundColor: "#E00000",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  discountAmount: {
    color: "white",
  },
});
