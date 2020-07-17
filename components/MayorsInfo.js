import * as React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import getMayorsInfo from "../hooks/getMayorsInfo";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function MayorsInfo(props) {
  const picSize = heightPercentageToDP("15%");
  let [ready, cityinfo] = getMayorsInfo(props, styles);
  let placeHolder = [
    <View
    key={1} 
    style={styles.cityInfo}>
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: picSize,
          height: picSize,
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
      <View style={{ flex:1, alignItems: "flex-start"  }}>
        <ShimmerPlaceHolder autoRun={true} style={styles.cityInfoTitle} />
        <ScrollView horizontal={true}>{placeHolder}{placeHolder}{placeHolder}</ScrollView>
      </View>
    );
  } else if (cityinfo == null) {
    return (
      <View
        style={{alignItems: "center", justifyContent: "center", alignContent:"center", alignSelf:"center" }}
      >
        <Text>No data available</Text>
      </View>
    );
  }
  return (
    <>
      <Text style={styles.cityInfoTitle}>Alcaldia de {props.name}</Text>
      <ScrollView horizontal={true} style={{flex:1, margin:8}} showsHorizontalScrollIndicator={false}>{cityinfo}</ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cityInfoTitle: {
    fontFamily: 'roboto',
    marginTop: 15,
    borderRadius:15,
    backgroundColor:"#0082de",
    paddingLeft:20,
    paddingRight:20,
    paddingTop:3,
    paddingBottom:3,
    alignSelf: "center",
    fontSize: 17,
    overflow:"hidden",
    //fontWeight: "700",
    letterSpacing: 0.3,
    color:"#fff"
  },
  mayorInfo:{
    fontFamily: "roboto",
    fontWeight:"bold",

  },
  mayorName: {
    //color:"#fff"

  },
  cityInfoText: {
    fontFamily:'roboto',
    margin: 10,
    alignSelf: "center",
  },
  cityInfo: {
    fontFamily:"roboto",
    flex: 1,
    flexDirection: "row",
    marginRight: 20,
    elevation: 3,
    shadowOpacity:0.4,
    shadowOffset:{height:0},
    shadowColor:"#ccc",
    shadowRadius: 7,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
