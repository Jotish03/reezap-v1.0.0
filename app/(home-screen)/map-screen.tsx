import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapViewGoogle from "@/components/map-view/map-view";

const MapScreen = () => {
  return (
    <View className="bg-white h-full">
      <MapViewGoogle />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
