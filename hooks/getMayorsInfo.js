import * as React from "react";
import { db } from "../constants/Firebase";
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import Colors from '../constants/Colors';
export default function getMayorsInfo(props, styles) {
  
  const picSize = heightPercentageToDP("15%");
  const [mayors, setmayors] = React.useState([]);
  const [ready, setready] = React.useState(false);

  const getColor = (partido) => {
    switch (partido) {
      case "Actual":
        return Colors.colorBlack1;
      case "Dignidad":
        return Colors.colorDignidad;
      case "PIP":
        return Colors.colorPIP;
      case "PNP":
        return Colors.colorPNP;
      case "PPD":
        return Colors.colorPPD;
      case "Victoria":
        return Colors.colorVictoria;
      default:
        return Colors.colorBlack1;
    }
  }
  React.useEffect(() => {
    db.ref("/Candidatos/Municipio de " + props.name + "/Alcaldia").on(
      "value",
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
                    info: data[value].info,
                    PartidoURL: data[value].PartidoURL,
                    PicURL: data[value].PicURL,
                    Partido: value
                  })
                }
                style={styles.cityInfo}
              >
                <Image
                  source={{ uri: data[value].PicURL }}
                  style={{
                    width: picSize,
                    height: picSize,
                    borderRadius: 50,
                    alignSelf: "center",
                    margin: 10,
                  }}
                />
                <View style={styles.cityInfoText}>
                  <Text style={ styles.mayorName }>
                    {data[value].Nombre}
                  </Text>
                  <Text style={ styles.mayorInfo, {color:getColor(value), fontWeight:"700", fontSize:14} }>{value}</Text>
                  <TouchableOpacity style={{backgroundColor:"#0082de", alignItems:"center", padding:5, borderRadius:15, marginRight:10, marginLeft:-10}}>
                    <Text style={{color:"#fff"}}>Ver Propuesta</Text>
                  </TouchableOpacity>
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
