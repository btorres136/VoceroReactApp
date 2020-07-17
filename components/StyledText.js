import * as React from "react";
import { Text } from "react-native";

export function RobotoText(props){
    return <Text {...props} style={[props.style, {fontFamily: 'roboto'}]} />;
}

export function MonoText(props) {
    return <Text {...props} style={[props.style, { fontFamily: 'space-mono'}]} />;
  }
  