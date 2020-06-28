import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  ScrollView,
} from "react-native";
import getMapMarkers from "../hooks/getMapMarkers";
const mapstyles = require("../constants/mapstyle.json");

export default function MapContainer(props) {
  let [markers, ready, cityselected] = getMapMarkers(props);
  if (!ready) {
    return <Text>Loading cities...</Text>;
  }
  if (cityselected != null) {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 18.220833,
            longitude: -66.590149,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          customMapStyle={mapstyles}
          maxZoomLevel={11}
          minZoomLevel={10}
        >
          {markers}
        </MapView>
        {cityselected}
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18.220833,
          longitude: -66.590149,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        maxZoomLevel={11}
        minZoomLevel={10}
      >
        {markers}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});
