import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }: any) => {
  let backgroundColor;
  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }} className="font-semibold">
      Skip
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }} className="font-semibold">
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }} className="font-interbold">
      Get Started
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = () => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => router.navigate("user-login")}
      onDone={() => router.navigate("user-login")}
      pages={[
        {
          backgroundColor: "#FFBF78",
          image: (
            <Image source={images.wavyone} className="h-[300px] w-[300px]" />
          ),
          title: (
            <Text className="text-3xl font-intersemibold">
              Welcome to Reezap
            </Text>
          ),
          subtitle: "Effortless Bike Rentals at Your Fingertips",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image source={images.wavytwo} className="h-[300px] w-[300px]" />
          ),
          title: (
            <Text className="text-3xl font-intersemibold">
              Find Your Perfect Ride
            </Text>
          ),
          subtitle: "Choose from a Wide Range of Bikes",
        },
        {
          backgroundColor: "#F3F7EC",
          image: (
            <Image source={images.wavythree} className="h-[300px] w-[300px]" />
          ),
          title: (
            <Text className="text-3xl font-intersemibold">
              Easy Booking Process{" "}
            </Text>
          ),
          subtitle: "Quick and Secure Bike Bookings Anytime, Anywhere",
        },
        {
          backgroundColor: "#c7ecee",
          image: (
            <Image source={images.wavyfour} className="h-[300px] w-[300px]" />
          ),
          title: (
            <Text className="text-3xl font-intersemibold">
              Ride with Confidence
            </Text>
          ),
          subtitle: "Reliable and Well-Maintained Bikes for Your Journey",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
