import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { images } from "@/constants";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "@/store/slices/nav-slice";

const data = [
  {
    id: "SK-123",
    title: "Rider-234",
    multiplier: 1,
    image: images.ride,
  },
  {
    id: "SK-1234",
    title: "Rider-545",
    multiplier: 1.2,
    image: images.ride,
  },
  {
    id: "SK-12355",
    title: "Rider-654",
    multiplier: 1.15,
    image: images.ride,
  },
  {
    id: "SK-1235775",
    title: "Rider-554",
    multiplier: 1.25,
    image: images.ride,
  },
  {
    id: "SK-1237855",
    title: "Rider-904",
    multiplier: 1.45,
    image: images.ride,
  },
];
const SURGE_CHARGE_RATE = 1.5;

const RideCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation: any = useSelector(selectTravelTimeInformation);
  console.log(travelTimeInformation);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DestinationCard")}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-lg font-semibold text-secondary">
          Select your Rider - {travelTimeInformation?.distance.text}
        </Text>
        <FlatList
          className=""
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity
              className={`flex-row justify-between items-center p-3 rounded-md ${
                id === selected?.id && "bg-green-200 rounded-e-md"
              }`}
              onPress={() => setSelected(item)}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 16,
                  resizeMode: "contain",
                }}
                source={item.image}
              />
              <View className="-ml-6">
                <Text className="text-lg font-semibold">{title}</Text>
                <Text>{travelTimeInformation?.duration.text}</Text>
              </View>
              <Text className="text-md font-interbold">
                {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "INR",
                }).format(
                  (travelTimeInformation?.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    50
                )}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View className="border border-t-gray-200">
          {selected ? (
            <TouchableOpacity className="bg-primary py-3 m-3 rounded-lg">
              <Text className="text-center text-white text-lg font-interbold">
                Choose {selected?.title}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-gray-300 py-3 m-3 rounded-lg"
              disabled
            >
              <Text className="text-center text-white text-lg font-interbold">
                Choose a ride
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RideCard;
