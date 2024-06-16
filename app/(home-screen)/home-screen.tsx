import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrigin,
  setDestination,
  setOrigin,
} from "@/store/slices/nav-slice";
import { router } from "expo-router";
import { Origin } from "@/types/location-types";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin: Origin | null = useSelector(selectOrigin);

  const isOriginSet = !!origin; // Using !! to convert the value to a boolean

  return (
    <View className="bg-white justify-center h-full p-4">
      <GooglePlacesAutocomplete
        placeholder="Where from?"
        styles={{
          container: { flex: 0 },
          textInput: { fontSize: 18 },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details?.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
          key: process.env.GOOGLE_MAPS_API,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <TouchableOpacity
        className={`flex flex-row items-center justify-center ${
          isOriginSet ? "bg-primary" : "bg-gray-400"
        } py-3 px-6 rounded-lg mt-4 w-full`}
        disabled={!isOriginSet}
        onPress={() => router.push("map-screen")}
      >
        <Text className="text-white font-interbold text-center">
          Find your ride
        </Text>
        {/* <ActivityIndicator size={20} color={"#ffffff"} className="ml-2" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
