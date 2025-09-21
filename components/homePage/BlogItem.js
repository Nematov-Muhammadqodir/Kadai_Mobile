import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function BlogItem({ date, content }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/general/phone_news.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.type}>
          <Text style={styles.typeText}>HUMOUR</Text>
        </View>
        <View style={styles.content_date}>
          <Text style={styles.content}>
            10 Funniest Memes About Vegetables That Will Make You Laugh Out Loud
          </Text>
          <Text style={styles.date}>Aug 18, 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: 345,
    height: 103,
    backgroundColor: Colors.grayPrimary,
    borderRadius: 8,
    padding: 5,
  },
  imageContainer: { width: 130, height: 93, borderRadius: 8 },
  image: { width: 130, height: 93, borderRadius: 8 },
  contentContainer: {
    height: 93,
    width: 205,
    justifyContent: "space-between",
  },
  type: {
    width: 57,
    height: 20,
    borderRadius: 8,
    backgroundColor: Colors.green900,
    justifyContent: "center",
    alignItems: "center",
  },
  typeText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 8,
    overflow: "hidden",
    textTransform: "uppercase",
  },
  content_date: {
    gap: 5,
  },
  content: {
    fontFamily: "open-sans-bold",
    fontSize: 12,
    color: Colors.gray700,
  },
  date: {
    fontFamily: "open-sans-bold",
    fontSize: 12,
    color: Colors.green900,
  },
});
