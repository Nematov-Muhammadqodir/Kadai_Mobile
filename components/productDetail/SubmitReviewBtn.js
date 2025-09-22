import { View, StyleSheet, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/colors";

export default function SubmitReviewBtn() {
  const authUser = false;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.mainContainer,
        pressed && styles.btnPressed,
      ]}
      disabled={authUser}
    >
      <View style={styles.textContainer}>
        <Text>Submit Review</Text>
        <FontAwesome name="send-o" size={18} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 150,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 8,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPressed: {
    transform: [{ scale: 0.97 }],
    backgroundColor: Colors.yellowSecondary,
  },
});
