import { Pressable, Text, View, StyleSheet } from "react-native";
import HorizontalLine from "../general/HorizontalLine";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Colors from "../../constants/colors";

export default function AddProduct() {
  return (
    <View style={styles.mainContainer}>
      <HorizontalLine />
      <View style={styles.btnsMainContainer}>
        <View style={styles.itemAmountContainer}>
          <Pressable
            style={({ pressed }) => [
              pressed && {
                backgroundColor: Colors.grayPrimary,
                padding: 10,
                alignSelf: "center",
                borderRadius: 30,
              },
            ]}
          >
            <FontAwesome6 name="minus" size={20} color="black" />
          </Pressable>
          <Text style={styles.amount}>2</Text>
          <Pressable
            style={({ pressed }) => [
              pressed && {
                backgroundColor: Colors.grayPrimary,
                padding: 10,
                alignSelf: "center",
                borderRadius: 30,
              },
            ]}
          >
            <FontAwesome6 name="plus" size={20} color="black" />
          </Pressable>
        </View>
        <Pressable
          style={({ pressed }) => [
            pressed && {
              backgroundColor: Colors.green900,
              padding: 10,
              alignSelf: "center",
              borderRadius: 30,
            },
            styles.addToCartBtn,
          ]}
        >
          <Text style={styles.amount}>Add To Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { paddingHorizontal: 30 },
  btnsMainContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  itemAmountContainer: {
    width: 126,
    height: 39,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  amount: {
    fontSize: 18,
  },
  addToCartBtn: {
    width: 200,
    height: 39,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
