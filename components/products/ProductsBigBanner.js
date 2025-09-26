import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";
import ShopNowBtn from "../general/ShopNowBtn";

export default function ProductsBigBanner() {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.intro}>100% organic Farm</Text>
          <Text style={styles.header}>
            The Natural Spices To {"\n"} Enhance Your Recipe
          </Text>
          <Text style={styles.saveText}>
            Save upto <Text style={styles.salesPercentage}>30% Off</Text> This
            Offer Only this week
          </Text>
        </View>
        <View style={{ zIndex: 2 }}>
          <ShopNowBtn text={"Shop Now"} />
        </View>
      </View>
      <Image
        source={require("../../assets/images/products/fruits.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    position: "relative",
    alignItems: "center",
    marginTop: 15,
    zIndex: 2,
  },
  mainContainer: {
    position: "relative",
    width: 335,
    height: 369,
    backgroundColor: Colors.skinColor,
    borderRadius: 8,
    padding: 20,
  },
  textContainer: {
    gap: 10,
  },
  intro: {
    textTransform: "uppercase",
    color: "grey",
    fontSize: 10,
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    lineHeight: 30,
  },
  saveText: { fontSize: 10, color: "grey" },
  salesPercentage: { fontSize: 26, color: "black" },
  image: {
    position: "absolute",
    bottom: -100,
    width: 400,
    height: 400,
    zIndex: 1,
  },
});
