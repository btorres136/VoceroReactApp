import * as React from "react";
import { Button } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Layout from "../constants/Layout";
export default function MayorInfo({ route }) {
  const { mayor, info, PartidoURL, PicURL, Partido } = route.params;
  return (
    <View style={style.mainView}>
      <Image
        source={{ uri: PicURL }}
        style={{
          width: Layout.window.width,
          height: Layout.window.height * 0.5,
          borderRadius: 10,
          alignSelf: "center",
          margin: 10,
        }}
      />
      <Text>{Partido}</Text>
      <Text>{mayor}</Text>
      <Text>Info: {info}</Text>
      <Image
        source={{ uri: PartidoURL }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: "center",
          margin: 10,
        }}
      />
      <Button title="Propuesta"></Button>
      <Button title="Redes Sociales"></Button>
      <Button title="Últimas Noticias"></Button>
    </View>
  );
}
const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fff",
  },
});
