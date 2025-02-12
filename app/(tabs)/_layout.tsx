import { Tabs } from "expo-router";
import React from "react";
import { Home } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
