import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CartItem() {
  const like = true;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Text>
          <Image
            source={require("../../assets/images/products/grape_PhotoGrid-min.png")}
          />
        </Text>
      </View>
      <View style={styles.cartDataContainer}>
        <Text style={styles.name}>Grape</Text>
        <Text style={styles.text}>Volume: 1KG</Text>
        <Text style={styles.text}>Discount:10%</Text>
        <Text style={styles.text}>Price: 12600 W - Total: 25200</Text>
      </View>
      <View style={styles.actionPanel}>
        <View style={styles.likeDelete}>
          <Pressable
            style={({ pressed }) => [
              styles.border,
              {
                backgroundColor: pressed
                  ? Colors.addToCartMain
                  : Colors.gray800,
              },
            ]}
          >
            {like ? (
              <FontAwesome name="heart" size={14} color="red" />
            ) : (
              <FontAwesome6 name="heart" size={14} color="black" />
            )}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.border,
              {
                backgroundColor: pressed
                  ? Colors.addToCartMain
                  : Colors.gray800,
              },
            ]}
          >
            <MaterialIcons name="cancel" size={14} color="black" />
          </Pressable>
        </View>
        <View style={styles.likeDelete}>
          <Pressable
            style={({ pressed }) => [
              styles.border,
              {
                backgroundColor: pressed
                  ? Colors.addToCartMain
                  : Colors.gray800,
              },
            ]}
          >
            <AntDesign name="plus" size={14} color="black" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.border,
              {
                backgroundColor: pressed
                  ? Colors.addToCartMain
                  : Colors.gray800,
              },
            ]}
          >
            <AntDesign name="minus" size={14} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.qtyContainer}>
        <Text>Qty:1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 10,
    borderColor: Colors.gray800,
    borderRadius: 5,
  },
  imageContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.gray700,
  },
  image: {},
  cartDataContainer: {
    justifyContent: "center",
  },
  name: { fontSize: 12, fontFamily: "open-sans-bold" },
  text: { fontSize: 10 },
  actionPanel: { justifyContent: "center", gap: 20 },
  likeDelete: { flexDirection: "row", gap: 10 },
  border: {
    padding: 5,
    backgroundColor: Colors.gray800,
    borderRadius: 4,
  },
  qtyContainer: {
    position: "absolute",
    right: 80,
    top: 12,
  },
});
