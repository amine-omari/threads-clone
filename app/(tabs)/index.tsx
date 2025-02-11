import { SafeAreaView, Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text className="text-2xl font-bold">Home Screen</Text>
        <Text className="text-2xl font-bold">Test</Text>
      </HStack>
    </SafeAreaView>
  );
}
