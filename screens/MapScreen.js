import * as React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import MapContainer from "../components/MapContainer";
import getCitiesData from "../hooks/getCitiesData";
import MapContainerIOS from "../components/MapContainerIOS";

export default function MapScreen({ navigation }) {
  /**
   * TODO:
   * Change Database to firestore to enable persistence
   * https://firebase.google.com/docs/firestore/manage-data/enable-offline
   */
  let [retrived, cities] = getCitiesData();

  //Important! use MapContainerIOS only on ios devices
  if (Platform.OS === "ios") {
    return (
      <View style={styles.container}>
        {retrived ? (
          <MapContainerIOS navigation={navigation} cities={cities} />
        ) : (
          <Text>Descargando Marcadores...</Text>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {retrived ? (
          <MapContainer navigation={navigation} cities={cities} />
        ) : (
          <Text>Descargando Marcadores...</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
