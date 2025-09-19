import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";
import ShopNowBtn from "../general/ShopNowBtn";

export default function BigBanner() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.intro}>Farm-Fresh</Text>
        <Text style={styles.motto}>Organic Goodness {"\n"}Every Greatness</Text>
        <Text style={styles.desc}>
          Shop smarter, eat fresher – groceries just a tap away.
        </Text>
        <ShopNowBtn />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/homePage/big_banner_image.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 335,
    height: 523,
    borderRadius: 10,
    backgroundColor: Colors.darkYellow,
    alignSelf: "center",
    marginVertical: 20,
    alignItems: "center",
    position: "relative",
  },
  textContainer: { marginTop: 40, zIndex: 2 },
  intro: {
    color: "white",
    fontSize: 8,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  motto: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 30,
    lineHeight: 35,
    textTransform: "capitalize",
    color: "white",
  },
  desc: {
    textAlign: "center",
    fontFamily: "open-sans",
    color: "white",
    marginTop: 11,
    fontSize: 10,
  },
  image: {
    position: "absolute",
    bottom: 0,
    width: 335,
    height: 425,
    zIndex: 1,
  },
});
