import { View, TextInput, Alert, Image , ImageBackground} from "react-native";
import { styles } from "../styles/styles";
import CustomButtom from "../shared/Button";

export default function SignInUser({ navigation }) {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      navigation.push("Register");
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
        placeholder="Full Names"
        style={styles.inputSignin}
        keyboardType="default"
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.inputSignin}
        keyboardType="phone-pad"
        maxLength={8}
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

      <CustomButtom text="Register" onPress={handleClick} />
      </ImageBackground>
    </View>
  );
}
