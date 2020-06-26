import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MapTapBar(props) {
    /*const buttonSize = new Animated.Value(1);
    const handlePress = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(buttonSize, {
                toValue: 1
            })
        ]).start();
    };
    const sizeStyle = {
        transform: [{scale: buttonSize}]
    }
    return (
    <View style={{ position: "absolute", alignItems: "center", flex:1, alignSelf:"center" }}>
      <Animated.View style={[styles.botton, sizeStyle]}>
        <TouchableHighlight onPress={() => handlePress()} underlayColor="#7F58FF">
          <Animated.View style={{alignSelf: "center", flex:1, position: "absolute", top: -20}}>
            <FontAwesome5 name="arrow-up" size={25} color="#cfc" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );*/
}

const styles = StyleSheet.create({
  botton: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 52,
    borderRadius: 36,
    position: "absolute",
    top: -30,
    //shadowColor: "#7f58ff",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff",
  },
});
