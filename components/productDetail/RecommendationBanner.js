import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../constants/colors";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RecommendationBanner() {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[Colors.primary700, Colors.secondary500]}
        style={[styles.rootScreen]}
      >
        <ImageBackground
          source={require("../../assets/images/products/chongsanchu-min.jpg")}
          resizeMode="cover"
          style={[
            { flex: 1, padding: 30, alignItems: "center", paddingTop: 70 },
          ]}
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.smallIntro}>Fresh and Local</Text>
          <Text style={styles.bigIntro}>
            Get groceries {"\n"} delivered to your {"\n"} home with ease
          </Text>

          <Text style={styles.description}>
            Choose from a wide variety of fresh items daily, delivered straight
            to your door with care and quality guaranteed.
          </Text>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    width: "100%",
    height: 496,
    backgroundColor: Colors.nosRangKok,
  },
  smallIntro: {
    color: "white",
    fontFamily: "open-sans",
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 3,
    fontWeight: 800,
  },
  bigIntro: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "open-sans-bold",
    lineHeight: 40,
    textTransform: "capitalize",
  },
  description: {
    color: "white",
    textAlign: "center",
    fontSize: 10,
    marginTop: 10,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
