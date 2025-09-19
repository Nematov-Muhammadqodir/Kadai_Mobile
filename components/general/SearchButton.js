import { View, StyleSheet, Text, Pressable } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Colors from "../../constants/colors";

export default function SearchButton() {
  return (
    <Pressable style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Search</Text>
        <EvilIcons name="search" size={24} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 81,
    height: 23,
    borderRadius: 200,
    backgroundColor: Colors.yellowPrimary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    top: 11,
  },
  text: { fontSize: 8 },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
