import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../constants/Colors";
import { RobotoText } from "../components/StyledText";
import Layout from "../constants/Layout";
import fontelloConfig from "../assets/fonts/config.json";
import { createIconSetFromFontello } from "@expo/vector-icons";
import { ScrollView, RectButton } from "react-native-gesture-handler";

import { AdMobBanner } from "expo-ads-admob";

// Set global test device ID

const Icon = createIconSetFromFontello(
  fontelloConfig,
  "fontello",
  "fontello.ttf"
);

export default function PartySelectionScreen(props) {
  const { navigation, route } = props;
  const { data } = route.params;

  return (
    <View style={styles.mainView}>
      <View style={styles.card}>
        <RobotoText style={styles.cardTitle}>Selecciona un Partido</RobotoText>
        <ScrollView style={styles.container}>
          <OptionButton
            icon="pnp_logo"
            label="Partido Nuevo Progresista"
            color={Colors.colorPNP}
            onPress={() =>
              navigation.navigate("CandidateInfo", {
                party: "PNP",
                type: data,
              })
            }
          />
          <OptionButton
            icon="pip_logo"
            label="Partido Independiente Puertorrique&ntilde;o"
            color={Colors.colorPIP}
            onPress={() =>
              navigation.navigate("CandidateInfo", {
                party: "PIP",
                type: data,
              })
            }
          />
          <OptionButton
            icon="ppd_logo"
            label="Partido Popular Democratico"
            color={Colors.colorPPD}
            onPress={() =>
              navigation.navigate("CandidateInfo", {
                party: "PPD",
                type: data,
              })
            }
          />
          <OptionButton
            icon="victoria_logo"
            label="Partido Victoria Ciudadana"
            color={Colors.colorVictoria}
            onPress={() =>
              navigation.navigate("CandidateInfo", {
                party: "Victoria",
                type: data,
              })
            }
          />
          <OptionButton
            icon="proyecto_dignidad_logo"
            label="Proyecto Dignidad"
            color={Colors.colorDignidad}
            isLastOption
            onPress={() =>
              navigation.navigate("CandidateInfo", {
                party: "Dignidad",
                type: data,
              })
            }
          />
        </ScrollView>
      </View>
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        //servePersonalizedAds={false} // true or false
        onDidFailToReceiveAdWithError={(err) => {
          console.log(err);
        }}
      />
    </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption, color }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "column" }}>
        <View style={styles.optionIconContainer}>
          <Icon name={icon} size={Layout.partyIconSize} color={color} />
        </View>
        <View style={styles.optionTextContainer}>
          <RobotoText style={styles.optionText}>{label}</RobotoText>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  mainView: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    height: Layout.heightMinusTabBar,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#ccc",
    shadowOpacity: 0.8,
    elevation: 10,
  },
  cardTitle: {
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: "#0082de",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    fontSize: 17,
    overflow: "hidden",
    letterSpacing: 0.3,
    color: "#fff",
  },

  //////////////////////TEST//////////////////

  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  optionIconContainer: {
    alignSelf: "center",
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  optionTextContainer: {
    alignSelf: "center",
  },
});
