import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import {
  AntDesign,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import BottomNavTab from "../../components/(tabs)/nav-tab";
import RecentRides from "@/components/(tabs)/recent-ride";

const data = [
  {
    id: "1",
    title: "FREE 1st Ride",
    subtitle: "FIRSTRIDE",
    expiry: "Expires on 31st July 2024",
    colors: "bg-orange-400",
  },
  {
    id: "2",
    title: "Flat ₹20 OFF",
    subtitle: "FLAT20",
    expiry: "Expires on 31st July 2024",
    colors: "bg-green-400",
  },
  {
    id: "3",
    title: "Flat ₹20 OFF",
    subtitle: "FLAT20",
    expiry: "Expires on 31st July 2024",
    colors: "bg-orange-400",
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin: Origin | null = useSelector(selectOrigin);

  const isOriginSet = !!origin; // Using !! to convert the value to a boolean

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="h-full relative">
          <LinearGradient
            colors={["#9b9ddf", "#e8cfcd", "transparent"]}
            className="h-[300px]"
          />

          <View className="absolute top-5 left-0 right-0 px-4 mt-8">
            <View className="flex flex-row items-center justify-between py-6 mb-4 rounded">
              <View className="mr-4">
                <MaterialIcons name="cloudy-snowing" size={45} color="white" />
              </View>
              <View>
                <Text className="text-[16px] font-intersemibold text-white shadow-md">
                  Gangtok, East Sikkim
                </Text>
                <Text className="text-[10px] text-center font-intermedium text-white shadow-md">
                  Thursday, 23 Jun 2024
                </Text>
              </View>
              <View>
                <Text className="text-4xl font-interbold text-white">20°</Text>
              </View>
            </View>

            <View className="bg-white h-[80px] mb-4 rounded-md">
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
            <View>
              {/* //home categories */}
              <View>
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
                    key: process.env.EXPO_PUBLIC_API_KEY,
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
              </View>
              <View className="flex flex-row items-center justify-center gap-3 mb-1 mt-1">
                <View className="h-[1px] bg-gray-400 w-[100px]" />
                <Text className="font-interbold  text-gray-500">
                  Quick Ride
                </Text>
                <View className="h-[1px] bg-gray-400 w-[100px]" />
              </View>
              <View className="flex flex-row justify-between items-center py-2 px-4">
                <View className="flex flex-row space-x-4">
                  <TouchableOpacity className="flex items-center">
                    <AntDesign name="home" size={24} color="#777" />
                    <Text className="text-sm font-medium">Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center">
                    <MaterialCommunityIcons
                      name="office-building"
                      size={24}
                      color="gray"
                    />
                    <Text className="text-sm font-medium">Office</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center">
                    <AntDesign name="pushpin" size={24} color="gray" />
                    <Text className="text-sm font-medium">Gym</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity className="flex items-center border border-dotted border-gray-500 px-4 py-2">
                  <AntDesign name="plus" size={16} color="#333" />
                  <Text className="text-sm font-medium">Add New</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row items-center justify-center gap-3 mb-1 mt-1">
                <View className="h-[1px] bg-gray-400 w-[80px]" />
                <Text className="font-interbold text-gray-500">
                  Available Coupons
                </Text>
                <View className="h-[1px] bg-gray-400 w-[80px]" />
              </View>
              <FlatList
                data={data}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="bg-white m-2 w-[200px] rounded-md mb-6">
                    <Text
                      className={`font-interbold  text-white text-center p-2 rounded-t-md ${item.colors}`}
                    >
                      {item.title}
                    </Text>
                    <Text className="text-center font-interbold text-2xl p-2">
                      {item.subtitle}
                    </Text>
                    <Text className="text-[10px] text-center top-[-12px]">
                      {item.expiry}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View className="flex flex-row items-center justify-center gap-3 mb-2">
              <View className="h-[1px] bg-gray-400 w-[100px]" />
              <Text className="font-interbold  text-gray-500">Recent Ride</Text>
              <View className="h-[1px] bg-gray-400 w-[100px]" />
            </View>
            <RecentRides />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
