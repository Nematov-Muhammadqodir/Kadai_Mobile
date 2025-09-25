import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function OurStories() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.first}>Our Stories</Text>
      <Text style={styles.second}>
        Your Trusted Partner in {"\n"} Everyday Shopping
      </Text>
      <Text style={styles.third}>
        Our journey started with a passion for fresh food, growing into an
        online store that delivers quality groceries straight to homes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  first: {
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  second: {
    fontSize: 26,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  third: {
    textAlign: "center",
    color: Colors.darkYellow,
    textDecorationLine: "underline",
    fontSize: 16,
    lineHeight: 22,
  },
});
