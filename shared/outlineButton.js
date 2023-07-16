import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function CustomOutlineButtom({ text, onPress }) {
  return (
 
      <TouchableOpacity>
        <View style={styles.btnOutline}>
          <Text onPress={onPress} style={styles.btnTextOutline}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
 
  );
}
