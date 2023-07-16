import {
  View,
  TextInput,
  Text,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/styles";
import CustomButtom from "../shared/Button";
import CustomOutlineButtom from "../shared/outlineButton";

export default function SignIn2({ navigation }) {
  const handleClick = () => {
    try {
      navigation.push("Create Account");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      // navigation.push('Dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    try {
      navigation.push("Reset Password");
    } catch (error) {
      console.log(error);
    }
  };
  const image = {
    uri: "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg",
  };


  return (
    <View style={styles.container3}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
          }}
          style={{ width: 200, height: 80, marginBottom: 20 }}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.inputSignin}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.inputSignin}
          secureTextEntry
        />

        <CustomButtom text="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={handleReset}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              marginLeft: 170,
              color: "#0D3AA9",
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <CustomOutlineButtom text="Register" onPress={handleClick} />
      </ImageBackground>
    </View>
  );
}
