import { Pressable, Text, View, StyleSheet } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Routes({ handleRouter }) {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("home")}
        >
          <Octicons name="home-fill" size={24} color="green" />
        </Pressable>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("products")}
        >
          <Text>Products</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("chat")}
        >
          <Text>MyPage</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("aboutUs")}
        >
          <Text>About Us</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("blogs")}
        >
          <Text>Blogs</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(4, 75, 63, 0.38)" : "white",
            },
            styles.wrapperCustom,
          ]}
          onPress={() => handleRouter("faq")}
        >
          <FontAwesome name="question-circle" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    width: 333,
    alignSelf: "center",
  },
  routeText: {},
  wrapperCustom: { borderRadius: 200, padding: 6 },
});
