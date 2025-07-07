import { Text, View } from "react-native";
import './global.css';


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-bold text-center text-primary font-quicksand-bold">
        Welcome to my React Native App!
      </Text>
    </View>
  );
}
