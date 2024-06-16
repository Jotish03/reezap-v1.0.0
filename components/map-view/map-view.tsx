import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { MAP_TYPES, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "@/store/slices/nav-slice";
import { Origin } from "@/types/location-types";

const MapViewGoogle = () => {
  const origin: Origin | null = useSelector(selectOrigin);
  return (
    <View className="h-[60vh] ">
      <MapView
        initialRegion={{
          latitude: origin?.location?.lat || 0,
          longitude: origin?.location?.lng || 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType={"mutedStandard"}
        className="flex-1"
      >
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin?.location?.lat || 0,
              longitude: origin?.location?.lng || 0,
            }}
            title="Your Reezap Origin"
            description={origin.description || ""}
            identifier="origin"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapViewGoogle;
