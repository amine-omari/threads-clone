import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <HStack></HStack>
    </View>
  );
}
