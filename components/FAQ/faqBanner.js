import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function FaqBanner() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/images/general/faq.jpg")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 30,
  },
  mainContainer: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    position: "relative",
  },
  positioning: { position: "absolute" },
  image: { width: "100%", height: 200 },
});
