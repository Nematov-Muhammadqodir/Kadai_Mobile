import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function CategoryCard({ id, name, icon }) {
  return (
    <View style={styles.category}>
      <View style={styles.categoryImage}>
        <Text>{icon}</Text>
      </View>
      <Text style={styles.categoryText}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  categoryImage: {
    borderRadius: 8,
    backgroundColor: Colors.grayPrimary,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontFamily: "open-sans",
    fontSize: 12,
    color: Colors.green900,
  },
});
