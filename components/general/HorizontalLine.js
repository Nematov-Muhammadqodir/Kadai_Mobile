import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function HorizontalLine() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.gray800,
    width: "90%",
    alignSelf: "center",
  },
});
