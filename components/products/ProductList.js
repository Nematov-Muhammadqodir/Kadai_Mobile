import { View, StyleSheet, Text, ScrollView } from "react-native";
import Colors from "../../constants/colors";
import NewProductCard from "../homePage/NewProductCard";

export default function ProductList() {
  const DATA = [
    {
      name: "Kiwi",
      price: 12000.0,
      desc: "Fresh and juicy kiwi",
      discountAmount: 10,
    },
    { name: "Apple", price: 8.5, desc: "Crisp red apples", discountAmount: 5 },
    {
      name: "Banana",
      price: 6.0,
      desc: "Sweet ripe bananas",
      discountAmount: 8,
    },
    {
      name: "Orange",
      price: 9.0,
      desc: "Citrus and refreshing",
      discountAmount: 12,
    },
    {
      name: "Grapes",
      price: 11.0,
      desc: "Seedless green grapes",
      discountAmount: 7,
    },
    {
      name: "Mango",
      price: 15.0,
      desc: "Tropical juicy mango",
      discountAmount: 10,
    },
    {
      name: "Strawberry",
      price: 14.0,
      desc: "Fresh sweet strawberries",
      discountAmount: 9,
    },
    {
      name: "Watermelon",
      price: 20.0,
      desc: "Refreshing and hydrating",
      discountAmount: 15,
    },
    {
      name: "Pineapple",
      price: 13.5,
      desc: "Tangy tropical pineapple",
      discountAmount: 6,
    },
    {
      name: "Blueberry",
      price: 16.0,
      desc: "Antioxidant-rich berries",
      discountAmount: 11,
    },
  ];

  const rows = [];
  for (let i = 0; i < DATA.length; i += 2) {
    rows.push(DATA.slice(i, i + 2));
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Products</Text>
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          {rows.map((rowItems, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {rowItems.map((item) => (
                <NewProductCard item={item} />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    // backgroundColor: Colors.grayPrimary,
    alignSelf: "center",
    // borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grayPrimary,
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginVertical: 20,
    // marginLeft: 20,
  },
  scrollContainer: {
    width: "100%",
    height: 1000, // fixed height
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    flex: 1,
    height: 231,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
