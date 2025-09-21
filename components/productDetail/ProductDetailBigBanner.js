import { View, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/colors";
import { useState } from "react";

export default function ProductDetailBigBanner() {
  // ✅ image map (require once, no delay later)
  const images = {
    grape: require("../../assets/images/products/grape_PhotoGrid-min.png"),
    carrot: require("../../assets/images/products/carrot_PhotoGrid-min.png"),
    eggs: require("../../assets/images/products/eggs_PhotoGrid-min.png"),
    kiwi: require("../../assets/images/products/kiwi_PhotoGrid-min.png"),
  };

  const [mainImage, setMainImage] = useState(images.grape);

  return (
    <View style={styles.mainContainer}>
      {/* Big Image */}
      <View style={styles.bigImageContainer}>
        <Image source={mainImage} style={styles.bigImage} />
      </View>

      {/* Small Images */}
      <View style={styles.smallImagesContainer}>
        {Object.entries(images).map(([key, img]) => (
          <Pressable
            key={key}
            style={({ pressed }) => [
              styles.smallImageContainer,
              pressed && styles.btnPressed,
            ]}
            onPress={() => setMainImage(img)}
          >
            <Image style={styles.smallImage} source={img} />
          </Pressable>
        ))}
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
  bigImage: {
    width: 300, // ✅ smaller than 400 for performance
    height: 300,
    resizeMode: "contain",
  },
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
    resizeMode: "contain",
  },
  btnPressed: {
    transform: [{ scale: 0.97 }],
    backgroundColor: Colors.darkYellow,
  },
});
