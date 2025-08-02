import { Tabs } from "expo-router";
import { House, Settings2 } from "lucide-react-native";
// import "./global.css";

export default function HomeScreen() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
          title: "home",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Settings2 color={color} size={size} />
          ),
          title: "settings",
        }}
      />
    </Tabs>
  );
}
