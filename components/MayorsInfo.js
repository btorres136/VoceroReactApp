import * as React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import getMayorsInfo from "../hooks/getMayorsInfo";

export default function MayorsInfo(props) {
  let [ready, cityinfo] = getMayorsInfo(props, styles);
  let placeHolder = [
    <View
    key={1} 
    style={styles.cityInfo}>
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
        <ShimmerPlaceHolder
          autoRun={true}
          style={{ marginBottom: 10 }}
          width={100}
        />
        <ShimmerPlaceHolder autoRun={true} width={100} />
      </View>
    </View>,
  ];

  if (!ready) {
    return (
      <View style={{ flex: 0.5, alignItems: "flex-start" }}>
        <ShimmerPlaceHolder autoRun={true} style={styles.cityInfoTitle} />
        <ScrollView horizontal={true}>{placeHolder}{placeHolder}{placeHolder}</ScrollView>
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
      <Text style={styles.cityInfoTitle}>Alcaldia de {props.name}</Text>
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
