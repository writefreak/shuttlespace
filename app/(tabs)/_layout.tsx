import { Tabs } from "expo-router";
import { Settings } from "lucide-react-native";
// import "./global.css";

export default function HomeScreen() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, //change to true for header
        headerStyle: {
          backgroundColor: "#003380ff", // 🔵 header background color
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
          headerTitle: "Home Screen",
        }}
      />
    </Tabs>
  );
}
