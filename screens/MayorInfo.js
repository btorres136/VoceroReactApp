import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function MayorInfo({ route }) {
  const { mayor, info, PartidoURL, PicURL, Partido } = route.params;
  return (
    <View style={style.mainView}>
      <Text>Nombre: {mayor}</Text>
      <Image
        source={{ uri: PicURL }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: "center",
          margin: 10,
        }}
      />
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
      <Text>{Partido}</Text>
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
