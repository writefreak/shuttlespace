import { Star } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Rating() {
  return (
    <View className="flex-row items-center gap-3">
      <Text>Rating</Text>
      <View className="flex-row items-center">
        <Text>4.5</Text>
        <Star className="fill-yellow-500" strokeWidth={0} fill={"#ca8a04"} />
      </View>
    </View>
  );
}
