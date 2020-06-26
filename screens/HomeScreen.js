import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { db } from "../constants/Firebase";
import MapContainer from '../components/MapContainer';

export default function HomeScreen() {
  const [cities, setcities] = React.useState();
  const [retrived, setretrived] = React.useState(false);
  
  React.useEffect(() => {
    db.ref("/Pueblos").on(("value" || "child_changed"), (snapshot) => {
      const data = snapshot.val();
      const newval = [];
      for (let value in data) { 
        newval.push({
          municipio: data[value].municipio,
          x_lat: data[value].x_long,
          y_lat: data[value].y_lat,
        });
      }
      setcities(newval);
      setretrived(true);
    });
  }, []);
  return (
    <View style={styles.container}> 
    {retrived ? (<MapContainer cities={cities}/>) : (<Text>Loading Map...</Text>)}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});