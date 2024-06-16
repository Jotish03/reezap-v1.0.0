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

import { Link } from "expo-router";
import OTPInput from "@/components/otp-fields/otp-fields";

const OTPFields = () => {
  const handleOTP = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-[70vh] px-4 my-6">
          <Image source={images.reezaplogo} />
          <Text className="font-interbold text-xl mt-1">
            Reez<Text className="text-primary">ap</Text>
          </Text>
          <OTPInput onCodeFilled={handleOTP} />
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

export default OTPFields;
