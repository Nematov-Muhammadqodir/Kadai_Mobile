import { Pressable, View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../constants/colors";

export default function ShopNowBtn() {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.btnContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Shop Now</Text>
          <AntDesign name="arrow-right" size={14} color="black" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 22,
    alignSelf: "center",
  },
  btnContainer: {
    width: 99,
    height: 29,
    borderRadius: 50,
    backgroundColor: Colors.yellowSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 11,
  },
});
