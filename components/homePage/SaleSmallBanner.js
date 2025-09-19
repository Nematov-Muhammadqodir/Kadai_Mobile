import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../constants/colors";

export default function SaleSmallBanner() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <AntDesign name="thunderbolt" size={24} color={Colors.yellowPrimary} />
        <Text style={styles.text}>Flash Sale Limited Time Only</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.green900,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontWeight: "400",
    color: "white",
    fontSize: 14,
    fontFamily: "open-sans",
    textTransform: "capitalize",
  },
});
