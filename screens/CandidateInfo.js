import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import getCandidateInfo from "../hooks/getCandidateInfo";

export default function CandidateInfo(props) {
  const { navigation, route } = props;
  const { party, type } = route.params;
  const [ retrived, candidate ] = getCandidateInfo(props);
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    candidate.map((elm, idx) => {
        const value = [];
        value.push(
            <View key={idx}>
                <Text>{elm.Nombre}</Text>
            </View>
        );
        setdata(value);
    });
  }, [candidate]);
  if (!retrived) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }else{
      return (
          <View>
              {data}
          </View>
      );
  }
}
