import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text } from "react-native";
import Animated, { interpolate } from "react-native-reanimated";
import getMapMarkers from "../hooks/getMapMarkers";
import { useTransition } from "react-native-redash";
import { tabBarContext } from "../hooks/tabBarContext";
import Layout from "../constants/Layout";

export default function MapContainerIOS(props) {
  //Custom map style (GoogleMaps)
  const mapCustom = require("../constants/mapstyle.json");

  //Provider to hide or show the tabBar when the BottomSheet is active
  const { showTabBar, setShowTabBar } = React.useContext(tabBarContext);

  //useEffect to toggle the bottomSheet when a marker is clicked
  const [open, setOpen] = React.useState(false);

  //Map reference
  const mapRef = React.createRef();

  //BottomSheet animation
  const scaleAnimation = useTransition(open);
  const translateY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [Layout.window.height, Layout.map.mapCardPosition],
  });

  //Function call to get markers, state, and city info to display
  let [markers, ready, { city, data }] = getMapMarkers(props);

  /*Change the state when a city is selected and start a map camera animation.
   * The animation is only available on Android natively. Whe have to create one for ios.
   */
  React.useEffect(() => {
    if (city != null) {
      //map camera animation
      mapRef.current.animateCamera(
        { center: { latitude: data.y_lat, longitude: data.x_lat }, zoom: 11 },
        100
      );

      setOpen(true);
      setShowTabBar(false);
    }
  }, [city]);

  if (!ready) {
    return <Text>Cargando Marcadores...</Text>;
  }

  return (
    /**
     * The styles of the map and the container have to be absolute
     * in order to adjust the mapPadding.
     */
    <Animated.View style={{ ...StyleSheet.absoluteFillObject }}>
      <MapView
        //Initialize the reference
        ref={mapRef}
        mapPadding={{
          //Move the google icon up or down when showIcon is Toggle
          bottom: open ? Layout.map.googleIcon : 55,
        }}

        customMapStyle={mapCustom}
        loadingEnabled={true}
        toolbarEnabled={false}
        showsScale={false}
        showsCompass={false}

        onPress={(e) => {
          e.stopPropagation();
          setOpen(false);
          setShowTabBar(true);
        }}

        provider={PROVIDER_GOOGLE}

        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 18.220833,
          longitude: -66.590149,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        
        maxZoomLevel={11}
        minZoomLevel={10.8}
      >
        {/* Variable is obtained from the getMapMarker function */}
        {markers}
      </MapView>

      {/* BottomSheet */}
      <Animated.View
        style={{
          backgroundColor: "#f5faff",
          borderRadius: 30,
          margin: 10,
          elevation: 300,
          minHeight: Layout.map.mapCardHeight,
          transform: [{ translateY: translateY }],
        }}
      >
        {/* BottomSheet Content */}
        {city}

      </Animated.View>
    </Animated.View>
  );
}
