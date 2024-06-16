import { View, Text } from "react-native";
import React from "react";
import OnboardingScreen from "@/components/onboarding-screen/onboarding-screen";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

const Home = () => {
  return (
    <SafeAreaProvider>
      <OnboardingScreen />
    </SafeAreaProvider>
  );
};

export default Home;
