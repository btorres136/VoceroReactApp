import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/MapScreen";
import LinksScreen from "../screens/LinksScreen";
import GovernorsScreen from "../screens/GovernorsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MayorInfo from "../screens/MayorInfo";
import { tabBarContext } from "../hooks/tabBarContext";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Map";
const Stack = createStackNavigator();

function MayorNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MayorInfo"
        component={MayorInfo}
        options={{ headerTitle: "Alcalde" }}
      />
    </Stack.Navigator>
  );
}

function GovNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={GovernorsScreen}
        options={{ headerTitle: "Gobernador" }}
      />
    </Stack.Navigator>
  );
}

function ComiNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={LinksScreen}
        options={{ headerTitle: "Comisionado" }}
      />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  const [showTabBar, setShowTabBar] = React.useState(true);
  const value = { showTabBar, setShowTabBar };

  return (
    <tabBarContext.Provider value={value}>
      <BottomTab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{ style: { backgroundColor: "#fff",  position:"absolute", bottom:0 } }}
      >
        <BottomTab.Screen
          name="Map"
          component={MayorNav}
          options={{
            tabBarVisible: showTabBar,
            title: "Mapa",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="map" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Governors"
          component={GovNav}
          options={{
            title: "Gobernacion",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="landmark" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Comisionado"
          component={ComiNav}
          options={{
            title: "Comisionado",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="flag-usa" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Senador"
          component={ComiNav}
          options={{
            title: "Senador",
            displayName: "hello",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="user-tie" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Representante"
          component={ComiNav}
          options={{
            title: "Representante",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="user-friends" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </tabBarContext.Provider>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Map":
      return null;
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
