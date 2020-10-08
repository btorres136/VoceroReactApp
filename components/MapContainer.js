import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolate } from "react-native-reanimated";
import getMapMarkers from "../hooks/getMapMarkers";
import { useTransition } from "react-native-redash";
import { tabBarContext } from "../hooks/tabBarContext";
import Layout from "../constants/Layout";
import * as Analytics from 'expo-firebase-analytics';

export default function MapContainer(props) {
  //Custom map style (GoogleMaps)
  const mapCustom = require("../constants/mapstyle.json");

  //Provider to hide or show the tabBar when the BottomSheet is active
  const { showTabBar, setShowTabBar } = React.useContext(tabBarContext);

  //useEffect to toggle the bottomSheet when a marker is clicked
  const [open, setOpen] = React.useState(false);

  //useEffect to toggle the position of the google Icon on the map
  const [showIcon, setShowIcon] = React.useState(false);

  //useEffect to force the map to rerender and change the position of the google Icon
  const [margin, setmargin] = React.useState(0);

  //BottomSheet animation
  const scaleAnimation = useTransition(open);
  const translateY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [Layout.window.height, Layout.map.mapCardPosition],
  });

  //Function call to get markers, state, and city info to display
  let [markers, ready, { city, data }] = getMapMarkers(props);

  //Change the state when a city is selected
  React.useEffect(() => {
    if (city != null) {
      setOpen(true);
      setShowTabBar(false);
      
      //Hack to force update map to move the google icon (only Android)
      setShowIcon(true);
      setmargin(0);
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
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <MapView
        mapPadding={{
          //Move the google icon up or down when showIcon is Toggle
          bottom: showIcon ? Layout.map.googleIcon : 55,
        }}
        onMapReady={() => {
          //Hack to force update map to move the google icon (only Android)
          setmargin(1);
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

          //Hack to force update map to move the google icon (only Android)
          setShowIcon(false);
          setmargin(1);
        }}
        provider={PROVIDER_GOOGLE}
        
        //Make use of the margin useEffect to adjust the margin and force the map to rerender
        style={{ ...StyleSheet.absoluteFillObject, marginBottom: margin }}

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

      { /* BottomSheet */}
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
    </View>
  );
}
