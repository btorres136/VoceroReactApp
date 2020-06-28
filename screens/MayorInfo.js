import * as React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
export default function MayorInfo({route}){
    const { mayor } = route.params;
    return(
        <View style={style.mainView}>
            <Text>{mayor}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    mainView: {
        flex:1,
        alignContent:"center",
        backgroundColor: "#fff"
    }
}) 