import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setDestination } from "@/store/slices/nav-slice";
import { useNavigation } from "@react-navigation/native";
import FavLocation from "@/components/map-view/fav";

const DestinationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <View className=" bg-white">
        <View className="py-4">
          <Text className="text-xl  text-center text-primary font-interbold">
            Hi there!{" "}
          </Text>
          <Text className="text-sm text-center text-gray-400 font-interlight">
            Select your destination
          </Text>
        </View>
        <View className="border-t border-gray-200 flex-shrink"></View>
        <View>
          <GooglePlacesAutocomplete
            styles={styles}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideCard");
            }}
            query={{
              key: process.env.GOOGLE_MAPS_API,
              language: "en",
            }}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </View>
      <FavLocation />
    </SafeAreaView>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    borderRadius: 5,
    fontSize: 18,

    borderColor: "gray",
    borderWidth: 1,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
