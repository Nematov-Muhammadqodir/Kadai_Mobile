import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AddToCartBtn from "../general/AddToCartBtn";

export default function CardDesc() {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>Eggs</Text>
      <Text style={styles.description}>New Eggs From Korea</Text>

      <View style={styles.viewContainer}>
        <AntDesign name="eye" size={24} color="black" />
        <Text>4</Text>
      </View>
      <View>
        <Text style={styles.name}>
          32.000 <Text>₩</Text>
        </Text>
      </View>
      <AddToCartBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    width: "100%",
    height: "50%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 5,
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
  },
  name: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    letterSpacing: 2,
  },
  description: {
    fontSize: 12,
    fontFamily: "open-sans",
    fontWeight: 500,
  },
});
