import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ItemProps {
  item: {
    id: string;
    icon: keyof typeof Ionicons.glyphMap; // Update the type to use keyof typeof Ionicons.glyphMap
    location: string;
    distance: string;
    date: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => (
  <View className="bg-white rounded-lg shadow-md mr-2">
    <View className="flex flex-row items-center justify-center gap-4 p-4">
      <Ionicons name={item.icon} size={24} color="orange" />

      <View className="flex justify-center ">
        <Text className="font-intersemibold text-[17px] ">{item.location}</Text>
        <View className="flex-row items-center  ">
          <Text className="text-sm font-interbold text-primary ">
            {item.distance}
          </Text>
          <Text className="text-sm text-primary  ml-3 font-interbold">
            {item.date}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

interface AppProps {}

const RecentRides: React.FC<AppProps> = () => {
  const data = [
    {
      id: "1",
      icon: "location" as keyof typeof Ionicons.glyphMap, // Use the 'as' keyword to cast the string to the correct type
      location: "Tadong, Gangtok, East Sikkim",
      distance: "1.6 km",
      date: "24 Dec 2023",
    },
    {
      id: "2",
      icon: "location" as keyof typeof Ionicons.glyphMap, // Use the 'as' keyword to cast the string to the correct type
      location: "Deorali, Gangtok, East Sikkim",
      distance: "1.2 km",
      date: "23 Dec 2023",
    },
  ];

  return (
    <View className="flex-1 p-1">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentRides;
