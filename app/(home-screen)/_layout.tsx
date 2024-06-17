import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import HomeScreen from "./home-screen";
import MapScreen from "./map-screen";
import DestinationCard from "./destination-card";
import RideCard from "./ride-card";

const HomeLayout = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="home-screen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="map-screen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="destination-card"
          component={DestinationCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ride-card"
          component={RideCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeLayout;
