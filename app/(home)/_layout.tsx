import { Stack } from "expo-router";
// import "./global.css";

export default function HomeScreen() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, //change to true for header
        animation: "slide_from_left",
        headerStyle: {
          backgroundColor: "#003380ff", // 🔵 header background color
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "Home Screen",
        }}
      />
    </Stack>
  );
}
