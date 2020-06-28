import * as React from "react";
import { db } from "../constants/Firebase";
import { Text, View, Image, TouchableOpacity } from "react-native";
export default function getMayorsInfo(props, styles) {
  const [mayors, setmayors] = React.useState([]);
  const [ready, setready] = React.useState(false);
  React.useEffect(() => {
    setready(false);
    db.ref("/Candidatos/Municipio de " + props.name + "/Alcaldia").on(
      "value" || "child_changed",
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const info = [];
          for (let value in data) {
            info.push(
              <TouchableOpacity
                key={value}
                activeOpacity={0.8}
                onPress={() =>
                  props.navigation.navigate("MayorInfo", {
                    mayor: data[value].Nombre,
                  })
                }
                style={styles.cityInfo}
              >
                <Image
                  source={{ uri: data[value].PicURL }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                    margin: 10,
                  }}
                />
                <View style={styles.cityInfoText}>
                  <Text style={{ fontWeight: "700", fontSize: 14 }}>
                    {data[value].Nombre}
                  </Text>
                  <Text style={{ fontSize: 14 }}>{value}</Text>
                </View>
              </TouchableOpacity>
            );
          }
          setmayors(info);
          setready(true);
        } else {
          setmayors(null);
          setready(true);
        }
      }
    );
  }, [props.name]);
  return [ready, mayors];
}
