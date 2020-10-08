import * as React from "react";
import { StyleSheet, View, Image, Text, ScrollView,TouchableOpacity } from "react-native";
import getCandidateInfo from "../hooks/getCandidateInfo";
import { AdMobBanner } from "expo-ads-admob";
import Layout from "../constants/Layout";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import * as Analytics from 'expo-firebase-analytics';

export default function CandidateInfo(props) {
  const { navigation, route } = props;
  const { party, type } = route.params;
  const [retrived, candidate] = getCandidateInfo(props);
  const [data, setdata] = React.useState([]); 
  const picSize = heightPercentageToDP("15%");
  return(
    <View style={styles.mainView}>
      <ScrollView>
      {candidate.map((elm,idx)=>{
        return(
          <View>
            <TouchableOpacity
             activeOpacity={0.8}
             onPress={() =>{
              Analytics.logEvent("Candidate_ButtonTaped", {
                name : "Candidate: " + elm.key,
                party : "Party: " + party,
                screen: "Candidate info",
                purpose: "See the candidate info"
              });
              props.navigation.navigate("MayorInfo", {
                mayor: elm.key,
                info: elm.info,
                PartidoURL: elm.PartidoURL,
                PicURL: elm.PicURL,
                Partido: party,
                FacebookURL: elm.FacebookURL
              });
             }}
             >
              <Image
                  source={{ uri: elm.PicURL }}
                  style={{
                  width: picSize,
                  height: picSize,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <Text>{elm.key}</Text>
            </TouchableOpacity>
          </View>
        );  
      })}
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-3940256099942544/6300978111" 
        //servePersonalizedAds={false} // true or false
        onDidFailToReceiveAdWithError={(err) => {
        console.log(err);
        }}
      />
      </ScrollView>
    </View>
  );

  /*
  React.useEffect(() => {
    candidate.map((elm, idx) => {
      const value = [];
      value.push(
        <View key={idx}>
          <Text>{elm.Nombre}</Text>
            <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID="ca-app-pub-3940256099942544/6300978111" 
              //servePersonalizedAds={false} // true or false
              onDidFailToReceiveAdWithError={(err) => {
                console.log(err);
              }}
            />
        </View>
      );
      setdata(value);
    });
  }, [candidate]);
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  }, 
  mainView: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    height: Layout.heightMinusTabBar,
  },
  item: {

  }
});
