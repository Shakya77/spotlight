import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to React Native!
      </Text>

      <Image source={{
        uri:
          "https://images.unsplash.com/photo-1741217531054-d00a1165dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}
        style={{
          width: 100,
          height: 100,
          resizeMode: "cover",
        }}></Image>

      <TouchableOpacity >
        <Text> this is the </Text>
      </TouchableOpacity>
    </View>
  );
}


