import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrigin,
  setDestination,
  setOrigin,
} from "@/store/slices/nav-slice";
import { router } from "expo-router";
import { Origin } from "@/types/location-types";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin: Origin | null = useSelector(selectOrigin);

  const isOriginSet = !!origin; // Using !! to convert the value to a boolean

  return (
    <View style={{ flex: 1 }}>
      <View className="h-full relative">
        <LinearGradient
          colors={["#9b9ddf", "#e8cfcd", "transparent"]}
          className="h-[300px]"
        />

        <SafeAreaView className="absolute top-5 left-0 right-0 p-4">
          <View className=" bg-white h-[80px] mb-4 rounded-md">
            <View className="flex flex-row justify-between p-4 items-center">
              <View className="flex flex-row gap-2 items-center">
                <Icon name="paid" type="material" color="orange" size={40} />
                <View className="flex justify-center">
                  <Text className="text-lg font-interbold">Reezap Coins</Text>
                  <Text className="text-[10px] font-interlight">
                    1 Reezap coins = 1 Rupee
                  </Text>
                </View>
              </View>
              <Text className="text-3xl font-interbold">10</Text>
            </View>
          </View>
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
            } py-3 px-6 rounded-lg mt-2 w-full`}
            disabled={!isOriginSet}
            onPress={() => router.push("map-screen")}
          >
            <Text className="text-white font-interbold text-center">
              Find your ride
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HomeScreen;
