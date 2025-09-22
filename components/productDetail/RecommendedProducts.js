import { View, StyleSheet, Text } from "react-native";
import RecommendationProductCard from "./RecommendationProductCard";
import Feather from "@expo/vector-icons/Feather";

export default function RecommendedProducts() {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>
        Recommended Products{" "}
        <Feather name="check-circle" size={34} color="green" />
      </Text>
      {products.map((product) => {
        return <RecommendationProductCard />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 50,
    gap: 10,
  },
  header: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
});
