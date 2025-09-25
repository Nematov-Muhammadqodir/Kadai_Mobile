import { Pressable, Text, View, StyleSheet } from "react-native";

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
          <Text>Home</Text>
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
          <Text>FAQ</Text>
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
          <Text>Chat</Text>
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
    width: 303,
    alignSelf: "center",
  },
  routeText: {},
  wrapperCustom: { borderRadius: 200, padding: 6 },
});
