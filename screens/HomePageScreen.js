import { Text, View } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import SearchInput from "../components/homePage/SearchInput";
import Routes from "../components/homePage/Routes";

export default function HomePageScreen() {
  return (
    <View>
      <SaleSmallBanner />
      <Logo />
      <SearchInput />
      <Routes />
    </View>
  );
}
