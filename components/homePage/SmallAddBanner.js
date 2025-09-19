import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SmallAddBanner() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <MaterialIcons name="discount" size={20} color="white" />
        <Text style={styles.text}>Today Deals</Text>
      </View>
      <View style={styles.textContainer}>
        <AntDesign name="thunderbolt" size={20} color={Colors.yellowPrimary} />
        <Text style={styles.text}>Flash Sale</Text>
      </View>
      <View style={styles.textContainer}>
        <AntDesign name="fire" size={20} color="white" />
        <Text style={styles.text}>Buy One Get One</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    height: 30,
    backgroundColor: Colors.green900,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  textContainer: { flexDirection: "row", alignItems: "center", gap: 4 },
  text: { color: "white", borderBottomWidth: 1, borderBottomColor: "white" },
});
