import { View, StyleSheet, Image, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/colors";

export default function DeliveryReturn() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.deliveryContainer}>
        <MaterialIcons
          name="delivery-dining"
          size={24}
          color={Colors.discountRedColor}
        />
        <Text style={styles.notAvailableText}>
          Estimate delivery times: ....
        </Text>
      </View>
      <View style={styles.deliveryContainer}>
        <MaterialCommunityIcons
          name="freebsd"
          size={24}
          color={Colors.green900}
        />
        <Text style={[{ color: Colors.green900 }]}>
          Free return within 30 days of purchase.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { marginTop: 20, gap: 20, alignItems: "center" },
  deliveryContainer: {
    flexDirection: "row",
    gap: 30,
    width: "90%",
    alignItems: "center",
  },
  notAvailableText: {
    color: Colors.discountRedColor,
    textDecorationLine: "line-through",
  },
});
