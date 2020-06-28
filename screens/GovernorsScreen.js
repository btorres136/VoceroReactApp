import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function GovernorsScreen() {
  return (
    <View style={styles.mainView}>
      <Text>Hola Mundo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    mainView: {
        flex:1,
        backgroundColor:"#ccc",
        alignItems:"center",
        alignContent:"center",
    }
});