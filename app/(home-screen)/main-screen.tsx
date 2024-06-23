import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNav from "@/components/(tabs)/nav-tab";

const MainScreen = () => {
  return (
    <View className="flex-1">
      <BottomNav />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
