import { Text, View } from "react-native";
import SaleSmallBanner from "../components/homePage/SaleSmallBanner";
import Logo from "../components/general/Logo";
import SearchInput from "../components/homePage/SearchInput";
import Routes from "../components/homePage/Routes";
import SmallAddBanner from "../components/homePage/SmallAddBanner";
import BigBanner from "../components/homePage/BigBanner";

export default function HomePageScreen() {
  return (
    <View>
      <SaleSmallBanner />
      <Logo />
      <SearchInput />
      <Routes />
      <SmallAddBanner />
      <BigBanner />
    </View>
  );
}
