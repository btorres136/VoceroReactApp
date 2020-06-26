import * as React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  useWindowDimensions
} from "react-native";
import { db } from "../constants/Firebase";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export default function CityInfo(props) {
  /*Partido: { value },
        PicURL: data[value].PicURL,
        Nombre: data[value].Nombre,
        PartidoURL: data[value].PartidoURL,
        info: data[value].info,*/
  const [cityinfo, setcityinfo] = React.useState([]);
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
              <View style={styles.cityInfo}>
                <Image
                  key={data[value]}
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
              </View>
            );
          }
          setcityinfo(info);
          setready(true);
        } else {
          setcityinfo(null);
          setready(true);
        }
      }
    );
  }, [props.name]);
  if (!ready) {
    return (
      <View style={{ flex: 0.5, alignItems: "flex-start" }}>
        <ShimmerPlaceHolder autoRun={true} style={styles.cityInfoTitle}/>
        <ScrollView horizontal={true}>
          <View style={styles.cityInfo}>
            <ShimmerPlaceHolder
              autoRun={true}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
                margin: 10,
              }}
            />
            <View style={styles.cityInfoText}>
              <ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 10}} width={100}/>
              <ShimmerPlaceHolder autoRun={true} width={100} />
            </View>
          </View>
          <View style={styles.cityInfo}>
            <ShimmerPlaceHolder
              autoRun={true}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
                margin: 10,
              }}
            />
            <View style={styles.cityInfoText}>
              <ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 10}} width={100}/>
              <ShimmerPlaceHolder autoRun={true} width={100} />
            </View>
          </View>
          <View style={styles.cityInfo}>
            <ShimmerPlaceHolder
              autoRun={true}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
                margin: 10,
              }}
            />
            <View style={styles.cityInfoText}>
              <ShimmerPlaceHolder autoRun={true} style={{ marginBottom: 10}} width={100}/>
              <ShimmerPlaceHolder autoRun={true} width={100} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else if (cityinfo == null) {
    return (
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Text>No data available</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 0.5, alignItems: "flex-start" }}>
      <Text style={styles.cityInfoTitle}>Municipo de {props.name}</Text>
      <ScrollView horizontal={true}>{cityinfo}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cityInfoTitle: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  cityInfoText: {
    margin: 10,
    alignSelf: "center",
  },
  cityInfo: {
    flex: 1,
    flexDirection: "row",
    marginRight: 20,
    elevation: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
