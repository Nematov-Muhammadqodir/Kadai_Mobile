import { Button, Pressable, Text, View, StyleSheet } from "react-native";

export default function Routes() {
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
