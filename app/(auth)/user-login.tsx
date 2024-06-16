import {
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

import { Link, router } from "expo-router";

const UserLogin = () => {
  const handleOTP = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-[70vh] px-4 my-6">
          <Image source={images.reezaplogo} />
          <Text className="font-interbold text-xl mt-1">
            Reez<Text className="text-primary">ap</Text>
          </Text>
          <View className="flex flex-col items-center justify-center mt-16">
            <Text className="font-intersemibold text-xl">
              Create an Account
            </Text>
            <Text className="font-interregular">
              Enter your phone number to sign up
            </Text>
          </View>
          <TextInput
            className="h-12 w-full border border-gray-300 rounded-lg px-4 mt-8 font-interregular text-lg"
            placeholder="Enter your phone number"
            keyboardType="number-pad"
          />
          <TouchableOpacity className="flex flex-row items-center justify-center bg-primary py-3 px-6 rounded-lg mt-4 w-full ">
            <Text
              className="text-white font-interbold text-center"
              onPress={() => router.push("user-otp")}
            >
              Sign Up
            </Text>
            {/* <ActivityIndicator size={20} color={"#ffffff"} className="ml-2" /> */}
          </TouchableOpacity>
          <Text className="font-interregular text-gray-500 text-[12px] mt-2">
            Sign up Reezap using Phone Number
          </Text>
        </View>

        <View className="flex  items-center justify-center mt-36">
          <Text className="font-interregular text-center px-4">
            By clicking continue, you agree to our{" "}
            <Link href={"user-otp-demo"} className="font-intersemibold">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={""} className="font-intersemibold">
              Privacy Policy
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserLogin;
