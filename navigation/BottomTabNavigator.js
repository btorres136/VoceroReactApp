import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/MapScreen";
import LinksScreen from "../screens/LinksScreen";
import GovernorsScreen from "../screens/GovernorsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MayorInfo from "../screens/MayorInfo";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Map";
const MayorStack = createStackNavigator();

function MayorNav({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <MayorStack.Navigator>
      <MayorStack.Screen name="Map" component={MapScreen} />
      <MayorStack.Screen name="MayorInfo" component={MayorInfo} />
    </MayorStack.Navigator>
  );
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ showLabel: false }}
    >
      <BottomTab.Screen
        name="Map"
        component={MayorNav}
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-map" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Governors"
        component={GovernorsScreen}
        options={{
          title: "Gobernacion",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Comisionado"
        component={LinksScreen}
        options={{
          title: "Comisionado",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-camera" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Senador"
        component={LinksScreen}
        options={{
          title: "Senador",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-podium" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Representante"
        component={LinksScreen}
        options={{
          title: "Representante",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-people" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Map":
      return "Mapa";
    case "Representante":
      return "Representantes por Acumulacion";
    case "Governors":
      return "Gobernacion";
    case "Senador":
      return "Senadores por Acumulacion";
    case "Comisionado":
      return "Comisionado Residente";
    case "MayorInfo":
      return "Informacion del Alcalde";
  }
}
