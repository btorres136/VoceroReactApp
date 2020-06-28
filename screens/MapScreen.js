import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapContainer from '../components/MapContainer';
import getCitiesData from '../hooks/getCitiesData';

export default function MapScreen({navigation}) {
  /**
   * TODO:
   * Change Database to firestore to enable persistence
   * https://firebase.google.com/docs/firestore/manage-data/enable-offline
   * 
   * TODO:
   * Change bottom menu of mayors for a sliding bottom sheet
   */
  let [retrived, cities] = getCitiesData();
  return (
    <View style={styles.container}> 
    {retrived ? (<MapContainer navigation={navigation} cities={cities}/>) : (<Text>Loading Map...</Text>)}
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