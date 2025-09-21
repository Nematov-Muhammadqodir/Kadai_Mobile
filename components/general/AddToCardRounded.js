import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";
import Feather from "@expo/vector-icons/Feather";

export default function AddToCartRounded() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnMainContainer,
        pressed && styles.btnPressed, // apply when pressed
      ]}
      onPress={() => console.log("Added to cart!")}
    >
      <Feather name="plus-circle" size={24} color={Colors.green900} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnMainContainer: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    bottom: 0,
    right: 0,
  },
  btnPressed: {
    backgroundColor: Colors.addToCartSecondary, // slightly darker shade
    transform: [{ scale: 0.97 }], // gives a "pressed in" effect
  },
});
