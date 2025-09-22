import { useRef, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/colors";
import Fontisto from "@expo/vector-icons/Fontisto";

const DATA = [
  {
    id: "1",
    review: "Best Product, Thank you for the product",
    image: require("../../assets/images/users/person1.jpg"),
    date: "21 September, 2025",
    name: "Kamila",
  },
  {
    id: "2",
    review: "Thank you for product",
    image: require("../../assets/images/users/person2.jpg"),
    date: "21 September, 2025",
    name: "Munojot",
  },
  {
    id: "3",
    review: "Is it fresh?",
    image: require("../../assets/images/users/person3.jpg"),
    date: "21 September, 2025",
    name: "Mariam",
  },
  {
    id: "4",
    review: "Can I order in bulk?",
    image: require("../../assets/images/users/person4.jpg"),
    date: "21 September, 2025",
    name: "Ugiloy",
  },
];

export default function ReviewsList({ handleProductDetail }) {
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
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={{ width: 400, height: 290, resizeMode: "contain" }}
        />
      </View>
      <View style={styles.reviewDetailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.review}>{item.review}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>
        Customer Testimonials{" "}
        <Fontisto name="aids" size={24} color={Colors.discountRedColor} />
      </Text>
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
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    padding: 10,
  },
  item: {
    width: 294,
    height: 412,
    justifyContent: "center",
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
  reviewDetailsContainer: {
    marginTop: 10,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: Colors.gray800,
    height: 110,
    borderRadius: 10,
    padding: 10,
  },
  nameContainer: {
    alignSelf: "center",
    textAlign: "left",
  },
  name: {
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
  reviewContainer: {
    height: 50,
    width: "100%",
  },
  review: {
    justifyContent: "center",
    color: Colors.green900,
  },
  dateContainer: {
    alignSelf: "flex-end",
  },
  date: {
    color: Colors.darkYellow,
  },
});
