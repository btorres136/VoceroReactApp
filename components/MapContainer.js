import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, Dimensions, StatusBar, View } from "react-native";
import CityInfo from "./CityInfo";
const mapstyles = require("../constants/mapstyle.json");

export default function MapContainer(props) {
  const [markers, setmarkers] = React.useState([]);
  const [ready, setready] = React.useState(false);
  const [cityselected, setcityselected] = React.useState(null);

  const showCityData = (city) => {
    setcityselected(<CityInfo name={city} />);
  };

  React.useEffect(() => {
    let mark = [];
    props.cities.map((data, idx) => {
      mark.push(
        <Marker
          key={idx}
          onPress={(e) => {
            showCityData(data.municipio);
          }}
          coordinate={{ latitude: data.y_lat, longitude: data.x_lat }}
          title={"Municipio de " + data.municipio}
        ></Marker>
      );
    });
    setmarkers(mark);
    setready(true);
  }, []);
  if (!ready) {
    return <Text>Loading cities...</Text>;
  }
  if (cityselected != null) {
    return (
      <View>
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
    <View>
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
