import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { Menu } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Colors from "../../constants/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function SearchProductsBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu2Open, setIsMenu2Open] = useState(false);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("lowestPrice");
  const handleMenuOpen = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const handleSortOpen = () => {
    isMenu2Open ? setIsMenu2Open(false) : setIsMenu2Open(true);
  };

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <View>
          <Menu
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            anchor={
              <Pressable
                onPress={handleMenuOpen}
                style={({ pressed }) => {
                  return [
                    styles.catergories,
                    {
                      backgroundColor: pressed
                        ? Colors.gray800
                        : Colors.darkYellow,
                    },
                  ];
                }}
              >
                <FontAwesome6 name="bars-progress" size={14} color="black" />
                <Text style={styles.categoryText}>Categories</Text>
              </Pressable>
            }
          >
            <Menu.Item
              onPress={() => handleCategory("")}
              title={
                <View>
                  <Text style={category === "" ? styles.menuItem : ""}>
                    All
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleCategory("fruits")}
              title={
                <View>
                  <Text style={category === "fruits" ? styles.menuItem : ""}>
                    Fruits
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleCategory("vegetables")}
              title={
                <View>
                  <Text
                    style={category === "vegetables" ? styles.menuItem : ""}
                  >
                    Vegetables
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleCategory("meat&Eggs")}
              title={
                <View>
                  <Text style={category === "meat&Eggs" ? styles.menuItem : ""}>
                    Meat&Eggs
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleCategory("nuts")}
              title={
                <View>
                  <Text style={category === "nuts" ? styles.menuItem : ""}>
                    Nuts
                  </Text>
                </View>
              }
            />
          </Menu>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputContainer}
            placeholder="Search Products"
          />
          <Pressable style={styles.searchBtnContainer}>
            <View style={styles.textContainer}>
              <EvilIcons name="search" size={24} color="black" />
            </View>
          </Pressable>
        </View>
        <View>
          <Menu
            visible={isMenu2Open}
            onDismiss={() => setIsMenu2Open(false)}
            anchor={
              <Pressable
                onPress={handleSortOpen}
                style={({ pressed }) => {
                  return [
                    styles.sortBy,
                    {
                      backgroundColor: pressed
                        ? Colors.gray800
                        : Colors.darkYellow,
                    },
                  ];
                }}
              >
                <FontAwesome5 name="sort-down" size={14} color="black" />
                <Text style={styles.categoryText}>Sort</Text>
              </Pressable>
            }
          >
            <Menu.Item
              onPress={() => handleSort("new")}
              title={
                <View>
                  <Text style={sortBy === "new" ? styles.menuItem : ""}>
                    New
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleSort("lowestPrice")}
              title={
                <View>
                  <Text style={sortBy === "lowestPrice" ? styles.menuItem : ""}>
                    Lowest Price
                  </Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => handleSort("highestPrice")}
              title={
                <View>
                  <Text
                    style={sortBy === "highestPrice" ? styles.menuItem : ""}
                  >
                    Highest Price
                  </Text>
                </View>
              }
            />
          </Menu>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 20, marginTop: 80 },
  mainContainer: {
    flexDirection: "row",
  },
  catergories: {
    width: 111,
    height: 30,
    backgroundColor: Colors.darkYellow,
    borderRadius: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  categoryText: {
    fontSize: 8,
  },
  menuItem: {
    textDecorationLine: "underline",
  },
  inputContainer: {
    width: 155,
    height: 30,
    marginHorizontal: 20,
    // marginTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 200,
    borderColor: "rgba(43, 77, 36, 0.3)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: "open-sans",
    fontSize: 8,
    color: "#4A4A4A",
    fontWeight: "600",
  },
  searchContainer: {},
  searchBtnContainer: {
    width: 51,
    height: 26,
    borderRadius: 200,
    backgroundColor: Colors.yellowPrimary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 22,
    top: 2,
  },
  textContainer: {
    flexDirection: "row",
  },
  sortBy: {
    width: 50,
    height: 30,
    backgroundColor: Colors.darkYellow,
    borderRadius: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
