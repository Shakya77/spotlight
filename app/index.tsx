import { Text, View, TouchableOpacity, Pressable } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to React Native!
      </Text>
      <TouchableOpacity onPress={() => alert("you touched")}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Pressable onPress={() => alert("you pressed")}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
}


