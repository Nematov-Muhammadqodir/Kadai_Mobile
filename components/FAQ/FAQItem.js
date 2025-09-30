import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Colors from "../../constants/colors";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FAQItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      {/* Accordion Header */}
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.headerText}>{question}</Text>
      </TouchableOpacity>

      {/* Accordion Body */}
      {expanded && (
        <View style={styles.body}>
          <Text>{answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    padding: 16,
    backgroundColor: Colors.darkYellow,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  body: {
    padding: 16,
    backgroundColor: "#ecf0f1",
  },
});
