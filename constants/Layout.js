import { Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

//To avoid recomputing, add the desire sizes in this file

//UI high Specs
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//MapContainer size Specs
const mapCardHeight = heightPercentageToDP("31%");
const mapCardPosition = heightPercentageToDP("65%");
const googleIcon = heightPercentageToDP("33%");

//Party Icon size
const partyIconSize = widthPercentageToDP("15%");

const heightMinusTabBar = heightPercentageToDP("85%");


export default {
  window: {
    width,
    height,
  },
  map: {
    mapCardHeight,
    mapCardPosition,
    googleIcon,
  },
  isSmallDevice: width < 375,
  partyIconSize,
  heightMinusTabBar
};
