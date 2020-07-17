/*
* Here are all the colors of the App. 
* A little change here will affect the aspect of the whole app.
*/

//Main Colos
const colorPrimary = "rgba(0, 130, 222, 0.8)";
const colorSecundary = "rgba(11, 57, 84,0.8)";

//Color variations
const colorWhite1 = "#fff";
const colorWhite2 = "#fefefe";

const colorGrey1 = "#ccc";
const colorBlack1 = "#000";

//Partidos Colors
const colorDignidad = "#00baed";
const colorPIP = "#199600";
const colorPNP = "#006bed";
const colorPPD = "#c90000";
const colorVictoria = "#edcd00";

export default {
  //Paridos Colors
  colorDignidad,
  colorPIP,
  colorPNP,
  colorPPD,
  colorVictoria,

  //UI colors
  colorPrimary,
  colorSecundary,
  colorWhite1,
  colorBlack1,

  //TabBar
  tabIconDefault: colorGrey1,
  tabIconSelected: colorPrimary,
  tabBar: colorWhite2,

  //System Errors and Screens
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: colorPrimary,
  noticeText: "#fff",
};
