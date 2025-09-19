import { Image, View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categories = [
    { id: 1, name: "All", icon: "🛒" },
    { id: 2, name: "Fruits", icon: "🍎" },
    { id: 3, name: "Vegetables", icon: "🥦" },
    { id: 4, name: "Mushrooms", icon: "🍄" },
    { id: 5, name: "Herbs", icon: "🌿" },
    { id: 6, name: "Meat", icon: "🍖" },
    { id: 7, name: "Milk", icon: "🍼" },
    { id: 8, name: "Grains", icon: "🌾" },
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Category</Text>
      <View style={styles.categoriesList}>
        {categories.map(({ id, name, icon }) => {
          return <CategoryCard id={id} name={name} icon={icon} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { justifyContent: "center", alignItems: "center", gap: 23 },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.green900,
    fontSize: 16,
    lineHeight: 24,
  },
  categoriesList: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
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
