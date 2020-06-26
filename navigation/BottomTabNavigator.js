import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import MapTabBar from "../components/MapTabBar";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

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
        component={HomeScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-map" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Gobernacion"
        component={LinksScreen}
        options={{
          title: "Gobernacion",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Camara"
        component={LinksScreen}
        options={{
          title: "Camara",
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
    case "Home":
      return "Mapa";
    case "Links":
      return "Representantes";
  }
}
