import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "@/app/(home-screen)/home-screen";
import Bookings from "@/app/(tab-screens)/bookings";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 8,
          color: "black",
        },
        tabBarStyle: {
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={"#4CDC98"} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="sports-motorsports"
              color={"#4CDC98"}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="account-balance-wallet"
              color={"#4CDC98"}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={"#4CDC98"} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
