import { View, Text } from "react-native";
import SaleSmallBanner from "../homePage/SaleSmallBanner";
import Logo from "./Logo";
import Routes from "../homePage/Routes";
import SmallAddBanner from "../homePage/SmallAddBanner";

export default function Layout({ handleRouter }) {
  return (
    <View>
      <SaleSmallBanner key="sale" />,
      <Logo key="logo" handleRouter={handleRouter} />,
      <Routes key="routes" handleRouter={handleRouter} />,
      <SmallAddBanner key="smallAdd" />,
    </View>
  );
}
