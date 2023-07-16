import {
    View,
    TextInput,
    Text,
    Alert,
    Image,
    ImageBackground,
  } from "react-native";
  import { styles } from "../styles/styles";
  import CustomButtom from "../shared/Button";
  
  export default function ResetPassword({ navigation }) {
    const handleResetPasssword = () => {
      try {
        Alert.alert("Confirm Delete", "Are you sure you want to delete");
        navigation.push("Create Account");
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
   
  
          <CustomButtom text="Reset Password" onPress={handleResetPasssword} />
        </ImageBackground>
      </View>
    );
  }
  