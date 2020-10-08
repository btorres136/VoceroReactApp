import * as React from "react";
import { Button, TextComponent } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Layout from "../constants/Layout";
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from "react-native-gesture-handler";
export default function MayorInfo({ route }) {
  const { mayor, info, PartidoURL, PicURL, Partido, FacebookURL } = route.params;
  return (
    <ScrollView style={style.mainView}>
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
      <Text>FacebookURL: {FacebookURL}</Text>
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
      <Button title="See Facebook" 
      onPress={() =>{
        WebBrowser.openBrowserAsync(FacebookURL);
       }}></Button>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fff",
  },
});
