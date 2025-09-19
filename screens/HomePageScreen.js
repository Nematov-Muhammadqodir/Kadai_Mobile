import { Text, View } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import SearchInput from "../components/homePage/SearchInput";

export default function HomePageScreen() {
  return (
    <View>
      <SaleSmallBanner />
      <Logo />
      <SearchInput />
    </View>
  );
}
