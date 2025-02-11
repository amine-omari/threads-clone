import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";

export default function HomeScreen() {
  return (
    <View>
      <HStack>
        <Text className="text-2xl font-bold">Home Screen</Text>
        <Text className="text-2xl font-bold">Test</Text>
      </HStack>
    </View>
  );
}
