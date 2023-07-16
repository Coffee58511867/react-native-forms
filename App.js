import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn2 from "./authentication/Signin2";
import SignInUser from "./authentication/Register";
import ResetPassword from "./authentication/ForgotPassword";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#91BAD6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={SignIn2}
        />
        <Stack.Screen name="Create Account" component={SignInUser} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
