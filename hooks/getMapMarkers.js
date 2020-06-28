import * as React from "react";
import { Marker } from "react-native-maps";
import MayorsInfo from "../components/MayorsInfo";

export default function getMapMarkers(props){
    const [markers, setmarkers] = React.useState([]);
    const [ready, setready] = React.useState(false);
    const [cityselected, setcityselected] = React.useState(null);
    const showCityData = (city) => {
      setcityselected(<MayorsInfo navigation={props.navigation} name={city} />);
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
            title={"Alcaldia de " + data.municipio}
          ></Marker>
        );
      });
      setmarkers(mark);
      setready(true);
    }, []);
    return [markers, ready, cityselected];
}