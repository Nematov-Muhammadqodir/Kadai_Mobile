import { Pressable, View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../constants/colors";

export default function ShopNowBtn({ text }) {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.btnContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{text}</Text>
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
    width: "auto",
    height: 29,
    borderRadius: 50,
    backgroundColor: Colors.yellowSecondary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: 11,
    fontFamily: "open-sans-bold",
  },
});
