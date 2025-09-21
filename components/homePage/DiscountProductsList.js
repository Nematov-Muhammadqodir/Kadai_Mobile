import { useRef, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import CardDesc from "../general/CardDesc";
import Colors from "../../constants/colors";

const DATA = [
  {
    id: "1",
    name: "Item 1",
    image: require("../../assets/images/products/eggs_PhotoGrid-min.png"),
  },
  {
    id: "2",
    name: "Item 2",
    image: require("../../assets/images/products/grape_PhotoGrid-min.png"),
  },
  {
    id: "3",
    name: "Item 3",
    image: require("../../assets/images/products/Garlic_PhotoGrid-min.png"),
  },
  {
    id: "4",
    name: "Item 4",
    image: require("../../assets/images/products/kiwi_PhotoGrid-min.png"),
  },
];

export default function DiscountProductsList({ handleProductDetail }) {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < DATA.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.btnPressed]}
      onPress={() => handleProductDetail(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={{ width: 300, height: 200, resizeMode: "contain" }}
        />
      </View>
      <CardDesc />
    </Pressable>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Discounted Products</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={goPrev} style={styles.arrow}>
          <MaterialIcons name="keyboard-arrow-left" size={22} color="black" />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity onPress={goNext} style={styles.arrow}>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  arrow: {
    padding: 10,
  },
  item: {
    width: 294,
    height: 412,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
    borderEndEndRadius: 10,
    borderStartEndRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  btnPressed: {
    transform: [{ scale: 0.97 }],
  },
});
