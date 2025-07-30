import Available from "@/components/home/available";
import Heading from "@/components/home/heading";
import RideOptions from "@/components/home/ride-options";
import SearchBar from "@/components/home/searchbar";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white pt-5 md:w-full ">
      <View className="w-full md:flex md:gap-4 md:max-w-[400px] md:px-4 md:mx-auto bg-white pt-5">
        <Heading />
        <SearchBar />
        <RideOptions />
        <Available />
      </View>
    </View>
  );
}
