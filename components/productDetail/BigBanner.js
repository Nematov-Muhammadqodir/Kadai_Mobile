import { View, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";

export default function ProductDetailBigBanner() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bigImageContainer}>
        <Image
          source={require("../../assets/images/products/grape_PhotoGrid.png")}
          style={styles.bigImage}
        />
      </View>
      <View style={styles.smallImagesContainer}>
        <View style={styles.smallImageContainer}>
          <Image
            style={styles.smallImage}
            source={require("../../assets/images/products/grape_PhotoGrid.png")}
          />
        </View>
        <View style={styles.smallImageContainer}>
          <Image
            style={styles.smallImage}
            source={require("../../assets/images/products/corn_PhotoGrid.png")}
          />
        </View>
        <View style={styles.smallImageContainer}>
          <Image
            style={styles.smallImage}
            source={require("../../assets/images/products/eggs_PhotoGrid.png")}
          />
        </View>
        <View style={styles.smallImageContainer}>
          <Image
            style={styles.smallImage}
            source={require("../../assets/images/products/kiwi_PhotoGrid.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 40,
    gap: 10,
  },
  bigImageContainer: {
    width: 335,
    height: 295,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.grayPrimary,
    backgroundColor: "#FAE4D6",
    alignItems: "center",
    justifyContent: "center",
  },
  bigImage: { width: 400, height: 400 },
  smallImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  smallImageContainer: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: Colors.grayPrimary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallImage: {
    width: 70,
    height: 70,
  },
});
