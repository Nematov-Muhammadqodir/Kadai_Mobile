import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Button } from "react-native-paper";
import { Menu } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Logo({ handleRouter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishList, setWishList] = useState(3);
  const [cartItemsAmount, setCartItemsAmount] = useState(7);

  const handleMenuOpen = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require("../../assets/images/general/kadai.png")} />
      </View>
      <View style={styles.logoContainer}>
        <View>
          <Menu
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            anchor={
              <Pressable onPress={handleMenuOpen}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
              </Pressable>
            }
          >
            <Menu.Item
              onPress={() => {}}
              title={
                <View style={styles.logoutContainer}>
                  <AntDesign name="logout" size={24} color="black" />
                  <Text>Logout</Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => {
                handleRouter("myPage");
              }}
              title={
                <View style={styles.myPageContainer}>
                  <FontAwesome6 name="users-gear" size={24} color="black" />
                  <Text>My Page</Text>
                </View>
              }
            />
          </Menu>
        </View>
        <View style={styles.likeContainer}>
          <Feather name="heart" size={24} color="black" />
          {wishList > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{wishList}</Text>
            </View>
          )}
        </View>
        <Pressable
          onPress={() => {
            handleRouter("cart");
          }}
        >
          <Feather name="shopping-cart" size={24} color="black" />
          {cartItemsAmount > 0 && (
            <View style={styles.shoppingBadge}>
              <Text style={styles.badgeText}>{cartItemsAmount}</Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  logoutContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  myPageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  likeContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -6, // position it at the top-right corner
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  shoppingBadge: {
    position: "absolute",
    right: -6, // position it at the top-right corner
    top: -6,
    backgroundColor: "green",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
