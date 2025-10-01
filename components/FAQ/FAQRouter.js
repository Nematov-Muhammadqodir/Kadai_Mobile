import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
import { useState } from "react";

export default function FAQRouter({ handleFAQSectionState, section }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Pressable
          style={
            (styles.text,
            section === "payment"
              ? {
                  color: "white",
                  borderBottomWidth: 2,
                  borderBottomColor: "white",
                }
              : {})
          }
          onPress={() => handleFAQSectionState("payment")}
        >
          <Text style={styles.text}>Payment</Text>
        </Pressable>

        <Pressable
          style={
            (styles.text,
            section === "products"
              ? {
                  color: "white",
                  borderBottomWidth: 2,
                  borderBottomColor: "white",
                }
              : {})
          }
          onPress={() => handleFAQSectionState("products")}
        >
          <Text style={styles.text}>Products</Text>
        </Pressable>
        <Pressable
          style={
            (styles.text,
            section === "common"
              ? {
                  color: "white",
                  borderBottomWidth: 2,
                  borderBottomColor: "white",
                }
              : {})
          }
          onPress={() => handleFAQSectionState("common")}
        >
          <Text style={styles.text}>Common</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: Colors.green900,
    marginTop: 10,
  },
  mainContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {},
  text: { color: "white" },
});
