import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";

export default function Footer() {
  return (
    <View style={styles.footerMainContainer}>
      <View>
        <Image source={require("../../assets/images/general/kadai.png")} />
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          Shop smart, eat better. Fresh fruits, veggies, and essentials
          delivered daily, making grocery shopping simple, reliable, and
          stress-free.
        </Text>
      </View>
      <View style={styles.linksContainer}>
        <View>
          <Text style={styles.linkHeader}>Categories</Text>
          <View style={styles.linksList}>
            <Text style={styles.text}> Immune Revival</Text>
            <Text style={styles.text}>Performance</Text>
            <Text style={styles.text}>Bundles</Text>
            <Text style={styles.text}>Accessories</Text>
            <Text style={styles.text}>Shop All</Text>
          </View>
        </View>
        <View>
          <Text style={styles.linkHeader}>Resources</Text>
          <View style={styles.linksList}>
            <Text style={styles.text}>FAQ</Text>
            <Text style={styles.text}>Testimonials</Text>
            <Text style={styles.text}>Community</Text>
            <Text style={styles.text}>Refer-A-Friend</Text>
            <Text style={styles.text}>Statement</Text>
          </View>
        </View>
        <View>
          <Text style={styles.linkHeader}>Useful Links</Text>
          Immune Revival Performance Bundles Accessories Shop All
          <View style={styles.linksList}>
            <Text style={styles.text}> Immune Revival</Text>
            <Text style={styles.text}>Performance</Text>
            <Text style={styles.text}>Refer-A-Friend</Text>
            <Text style={styles.text}>Statement</Text>
            <Text style={styles.text}>Community</Text>
          </View>
        </View>
      </View>
      <View style={styles.border}></View>

      <View style={styles.addressMainContainer}>
        <Text style={styles.addressHeader}>Our Address</Text>
        <View style={styles.addressContainer}>
          <View style={styles.detailsRow}>
            <View style={styles.detail}>
              <Entypo name="location-pin" size={15} color="black" />
              <Text style={styles.text}>
                9826 Painter Ave, Whittier,{"\n"} CA, United States.
              </Text>
            </View>
            <View style={styles.detail}>
              <Entypo name="mail" size={15} color="black" />
              <Text style={styles.text}>kevin@gmail.com</Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.detail}>
              <Entypo name="old-phone" size={15} color="black" />
              <Text style={styles.text}>010 - 8094 - 0023</Text>
            </View>
            <View style={[styles.detail, { paddingRight: 11 }]}>
              <Entypo name="network" size={15} color="black" />
              <Text style={styles.text}>https://kadai.uz</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Entypo name="instagram" size={24} color="black" />
        <Entypo name="twitter" size={24} color="black" />
        <Entypo name="facebook" size={24} color="black" />
        <Entypo name="youtube" size={24} color="black" />
        <Entypo name="linkedin" size={24} color="black" />
        <Entypo name="github" size={24} color="black" />
        <Entypo name="pinterest" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerMainContainer: {
    marginTop: 40,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.grayPrimary,
    paddingBottom: 70,
  },
  logoContainer: {},
  introContainer: {
    marginTop: 20,
  },
  introText: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 10,
    lineHeight: 18,
  },
  linksContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  linkHeader: {
    fontSize: 12,
    fontFamily: "open-sans-bold",
  },
  linksList: {
    marginTop: 16,
    height: 110,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 8,
    fontFamily: "open-sans",
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.green900,
    width: "100%",
    marginTop: 31,
  },
  addressMainContainer: { marginTop: 30 },
  addressHeader: { fontSize: 14, fontFamily: "open-sans-bold" },
  addressContainer: { marginTop: 30, gap: 16 },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  text: { fontSize: 10, fontFamily: "open-sans" },
  logoContainer: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.green900,
  },
});
