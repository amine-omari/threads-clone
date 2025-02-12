import { SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

export default () => {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text className="text-2xl font-bold">Home Screen</Text>
        <Text className="text-2xl font-bold">Test</Text>
      </HStack>
    </SafeAreaView>
  );
};
