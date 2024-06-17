import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Gangtok",
    destination: "MG Marg, Gangtok 737102",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Tadong",
    destination: "Tadong, Gangtok 737102",
  },
  {
    id: "12344",
    icon: "home",
    location: "Deorali",
    destination: "Near Bus Stand, Gangtok 737102",
  },
];
const FavLocation = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5 gap-4">
          <Icon
            style={{
              marginRight: 4,
              borderRadius: 50,
              backgroundColor: "#4ce19b",
              padding: 10,
            }}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavLocation;

const styles = StyleSheet.create({});
