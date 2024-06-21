import { router } from "expo-router";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

interface OTPInputProps {
  onCodeFilled: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onCodeFilled }) => {
  return (
    <View>
      <View className="flex flex-col items-center justify-center mt-16">
        <Text className="font-intersemibold text-xl">OTP</Text>
        <Text className="font-interregular">Waiting for OTP</Text>
      </View>
      <View className="flex flex-row justify-center items-center space-x-2 my-4">
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-bold"
            maxLength={1}
            keyboardType="number-pad"
          />
        ))}
      </View>
      <TouchableOpacity
        className="bg-primary py-3 px-6 rounded-lg mt-1"
        onPress={() => router.push("main-screen")}
      >
        <View className="flex flex-row items-center justify-center gap-2">
          <Text className="text-white text-center font-intersemibold">
            Verify OTP
          </Text>
          {/* <ActivityIndicator color={"#ffffff"} /> */}
        </View>
      </TouchableOpacity>
      <Text className="font-interregular text-gray-500 text-[12px] mt-2 text-center">
        Resend OTP
      </Text>
    </View>
  );
};

export default OTPInput;
