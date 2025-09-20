import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function AddToCartBtn() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnMainContainer,
        pressed && styles.btnPressed, // apply when pressed
      ]}
      onPress={() => console.log("Added to cart!")}
    >
      <SimpleLineIcons name="basket" size={20} color="black" />;
      <Text>Add To Cart</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnMainContainer: {
    width: 270,
    height: 34,
    backgroundColor: Colors.addToCartMain,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  btnPressed: {
    backgroundColor: Colors.addToCartSecondary, // slightly darker shade
    transform: [{ scale: 0.97 }], // gives a "pressed in" effect
  },
});
