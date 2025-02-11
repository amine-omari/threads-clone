import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-2xl font-bold">Home Screen</Text>
      <HStack></HStack>
    </View>
  );
}
