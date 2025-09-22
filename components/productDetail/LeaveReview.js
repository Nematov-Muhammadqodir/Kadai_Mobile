import { View, Text, StyleSheet, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/colors";
import { useState } from "react";
import SubmitReviewBtn from "./SubmitReviewBtn";

export default function LeaveReview() {
  const [review, setReview] = useState("");
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Leave a Review</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.secondaryHeaderContainer}>
          <Text style={styles.secondaryHeader}>Review</Text>
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Leave a Review"
            onChangeText={setReview}
            value={review}
            style={styles.textInput}
          />
        </View>
      </View>
      <SubmitReviewBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: Colors.grayPrimary,
  },
  mainHeader: { fontSize: 20, fontFamily: "open-sans-bold" },
  textInputContainer: {
    marginTop: 10,
  },
  secondaryHeaderContainer: { flexDirection: "row", gap: 10 },
  secondaryHeader: {
    fontSize: 16,
    fontFamily: "open-sans",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gray800,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  textInput: {
    height: 50,
  },
});
