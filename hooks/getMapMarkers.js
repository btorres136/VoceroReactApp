import * as React from "react";
import { Marker, Callout } from "react-native-maps";
import { Text, Platform, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import MayorsInfo from "../components/MayorsInfo";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function getMapMarkers(props) {
  
  const [markers, setmarkers] = React.useState([]);
  const [ready, setready] = React.useState(false);
  const [cityselected, setcityselected] = React.useState({});
  const [change, setchange] = React.useState(-1);

  const showCityData = (data, idx) => {
    setchange(idx);
    setcityselected({city: <MayorsInfo navigation={props.navigation} name={data.municipio} />, data: data});
  };

  React.useEffect(() => {
    let mark = [];
      props.cities.map((data, idx) => {
        mark.push(
          <Marker
            focusable={true}
            key={idx}
            tracksViewChanges={false}
            onPress={(e) => {
              e.stopPropagation();
              showCityData(data, idx);
            }}
            coordinate={{ latitude: data.y_lat, longitude: data.x_lat }}
          >
            <Animated.View>
              <FontAwesome5
                name={"map-marker"}
                size={27}
                color={
                  change === idx
                    ? Colors.colorPrimary
                    : Colors.colorSecundary
                }
              />
              <Text
                style={{ fontSize: 14, fontFamily: "roboto", color: "#666666" }}
              >
                {data.municipio}
              </Text>
            </Animated.View>
            <Callout tooltip={true} />
          </Marker>
        );
      });
    setmarkers(mark);
    setready(true);
  }, [props.cities, change]);
  return [markers, ready, cityselected];
}
