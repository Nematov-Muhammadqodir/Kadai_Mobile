import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/colors";
import NewProductCard from "../homePage/NewProductCard";
import { useEffect, useState } from "react";
import { getProducts, clearProductsCache } from "../../libs/api/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      const data = await getProducts(0, 10, forceRefresh);
      setProducts(data);
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadProducts(true); // Force refresh from API
    setIsRefreshing(false);
  };

  const handleClearCache = async () => {
    await clearProductsCache();
    await loadProducts(true);
  };

  // Split products into rows of 2
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  if (isLoading && products.length === 0) {
    return (
      <View style={[styles.mainContainer, styles.centerContent]}>
        <ActivityIndicator size="large" color={Colors.green900} />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Products ({products.length})</Text>
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              colors={[Colors.green900]}
            />
          }
        >
          {rows.map((rowItems, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {rowItems.map((item, index) => (
                <NewProductCard
                  item={item}
                  key={item.id || `${rowIndex}-${index}`}
                />
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
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.grayPrimary,
  },
  centerContent: {
    justifyContent: "center",
    minHeight: 200,
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontFamily: "open-sans",
    color: Colors.green900,
  },
  scrollContainer: {
    width: "100%",
    height: 1000,
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
});
