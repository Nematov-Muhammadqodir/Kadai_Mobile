import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import BlogItem from "./BlogItem";
import ShopNowBtn from "../general/ShopNowBtn";

export default function BlogsList() {
  const blogsData = [
    {
      type: "HUMOR",
      text: "10 Funniest Memes About Vegetables That Will Make You Laugh Out Loud",
      date: "Aug 20, 2023",
    },
    {
      type: "HEALTH",
      text: "The Ultimate Guide to Superfoods: Boost Your Health with These Nutrient-Packed Foods",
      date: "Aug 18, 2023",
    },
    {
      type: "RECIPES",
      text: "5 Quick and Easy Vegan Recipes for Busy Weeknights",
      date: "Aug 15, 2023",
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Latest News & Blogs</Text>
      <View>
        <FlatList
          data={blogsData}
          renderItem={({ item }) => (
            <BlogItem date={item.date} content={item.text} />
          )}
        />
      </View>
      <View>
        <ShopNowBtn text={"View All Blogs"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 20,
  },
});
