import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const HomeLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home-screen" options={{ headerShown: false }} />
        <Stack.Screen name="map-screen" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default HomeLayout;
