import { createStackNavigator } from "@react-navigation/stack";

import React from "react";

import Bookings from "./bookings";

const HomeLayout = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="bookings"
          component={Bookings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeLayout;
