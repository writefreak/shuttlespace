import Available from "@/components/home/available";
import Heading from "@/components/home/heading";
import Ride from "@/components/home/ride";
import RideOptions from "@/components/home/ride-options";
import SearchBar from "@/components/home/searchbar";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="w-full md:gap-4 md:px-4 bg-white pt-5">
          <Heading />
          <SearchBar />
          <RideOptions />
          <Available />
          <Ride />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
