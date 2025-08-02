import { useRouter } from "expo-router";
import { View } from "react-native";
import Button from "../ui/button";

export default function Ride() {
  const router = useRouter();
  return (
    <View className="px-4 py-8">
      <Button
        className="w-full items-center justify-center "
        variant="default"
        text="Book a Ride"
        onPress={() => router.push("/(tabs)/settings")}
      />
    </View>
  );
}

{
  /* <Image
            source={require("../../assets/images/3643906-removebg-preview.png")}
            className="object-cover h-full w-full"
          /> */
}
