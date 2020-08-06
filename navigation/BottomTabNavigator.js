import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/MapScreen";
import LinksScreen from "../screens/LinksScreen";
import PartySelectionScreen from "../screens/PartySelectionScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MayorInfo from "../screens/MayorInfo";
import { tabBarContext } from "../hooks/tabBarContext";
import CandidateInfo from "../screens/CandidateInfo";

import { createIconSetFromFontello } from "@expo/vector-icons";
import fontelloconf from "../assets/fonts/pr.json";
import Colors from "../constants/Colors";

const Icon = createIconSetFromFontello(
  fontelloconf,
  "prfontello",
  "prfontello.ttf"
);
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

function SenateNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PartySelectionScreen"
        component={PartySelectionScreen}
        initialParams={{ data: "Senado" }}
        options={{ headerTitle: "Senador" }}
      />
      <Stack.Screen
        name="CandidateInfo"
        component={CandidateInfo}
        options={{ headerTitle: "Candidato" }}
      />
    </Stack.Navigator>
  );
}

function RepreNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PartySelectionScreen"
        component={PartySelectionScreen}
        initialParams={{ data: "Representante" }}
        options={{ headerTitle: "Representante" }}
      />
      <Stack.Screen
        name="CandidateInfo"
        component={CandidateInfo}
        options={{ headerTitle: "Candidato" }}
      />
    </Stack.Navigator>
  );
}

function GovNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PartySelectionScreen"
        component={PartySelectionScreen}
        initialParams={{ data: "Gobernacion" }}
        options={{ headerTitle: "Gobernador" }}
      />
      <Stack.Screen
        name="CandidateInfo"
        component={CandidateInfo}
        options={{ headerTitle: "Candidato" }}
      />
    </Stack.Navigator>
  );
}

function ComiNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={PartySelectionScreen}
        initialParams={{ data: "Comisionado" }}
        options={{ headerTitle: "Comisionado" }}
      />
      <Stack.Screen
        name="CandidateInfo"
        component={CandidateInfo}
        options={{ headerTitle: "Candidato" }}
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
        tabBarOptions={{
          style: { backgroundColor: "#fff", position: "absolute", bottom: 0 },
        }}
      >
        <BottomTab.Screen
          name="Map"
          component={MayorNav}
          options={{
            tabBarVisible: showTabBar,
            title: "Mapa",
            tabBarIcon: ({ focused }) => (
              //<Icon name="pr" size={22} focused={focused} />
              <Icon
                name="pr"
                size={22}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />
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
          component={SenateNav}
          options={{
            title: "Senador",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="user-tie" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Representante"
          component={RepreNav}
          options={{
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
