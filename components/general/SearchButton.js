import { View, StyleSheet, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Colors from "../../constants/colors";

export default function SearchButton() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Search</Text>
        <EvilIcons name="search" size={24} color="black" />
      </View>
    </View>
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
