import { Image, Text, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export default function Logo() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require("../../assets/images/general/kadai.png")} />
      </View>
      <View style={styles.logoContainer}>
        <FontAwesome name="user-circle-o" size={24} color="black" />
        <Feather name="heart" size={24} color="black" />
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
