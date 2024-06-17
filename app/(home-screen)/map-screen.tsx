import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MapViewGoogle from "@/components/map-view/map-view";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationCard from "./destination-card";
import RideCard from "./ride-card";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { router } from "expo-router";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity
        onPress={() => router.navigate("home-screen")}
        className="bg-primary absolute top-16 left-4 z-50 p-3 rounded-full shadow-lg"
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View className="bg-white h-3/5">
        <MapViewGoogle />
      </View>
      <View className=" flex-1 bg-white">
        <Stack.Navigator>
          <Stack.Screen
            name="DestinationCard"
            component={DestinationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideCard"
            component={RideCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
