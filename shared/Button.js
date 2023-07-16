import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function CustomButtom({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Text onPress={onPress} style={styles.btnText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
