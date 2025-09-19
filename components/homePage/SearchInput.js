import { TextInput } from "react-native";
import { View, StyleSheet } from "react-native";
import SearchButton from "../general/SearchButton";

export default function SearchInput() {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Search For Anything"
      />
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
  inputContainer: {
    width: 335,
    height: "auto",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 200,
    borderColor: "rgba(43, 77, 36, 0.3)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: "open-sans",
    fontSize: 8,
    height: 26,
    color: "#4A4A4A",
    fontWeight: "600",
  },
});
