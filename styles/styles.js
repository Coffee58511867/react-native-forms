import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      // backgroundColor: '#1974D2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: 
    {
        fontSize: 25,
        fontStyle: 'italic',
      
        
    },
    registerTitle: {
      fontSize: 30,
      fontWeight: 600,
      padding: 10
  
    },
    loginSubTitle: {
      fontSize: 18,
      fontWeight: 300,
      padding: 10
      
    },
    input:
    {
      marginBottom: 7,
      width: 300
    },
    btn: {
      height: 40,
      marginTop: 10,
      backgroundColor: "#0D3AA9",
      width: 300,
      borderRadius: 6,
    },
    btnText: {
      color: "white",
      textAlign: "center",
      marginTop: 9,
      fontSize: 16,
    },
    btnOutline: {
      height: 40,
      marginTop: 10,
      borderWidth: 2,
      borderColor: 'black',
      width: 300,
      borderRadius: 6,
    },
    btnTextOutline: {
      color: "blue",
      textAlign: "center",
      marginTop: 7,
      fontSize: 16,
    },


    //Register Form

    input2: 
    {
      borderWidth: 1,
      width: '80%',
      height: 40,
      padding: 10,
      margin: 5,
      borderRadius: 6,

    },

    //Signin Form

    inputSignin: 
    {
      borderWidth: 1,
      width: '80%',
      height: 40,
      padding: 10,
      // backgroundColor: 'white',
      margin: 5,
      borderRadius: 6,

    },
    textAccount : 
    {
      fontSize: 16,
      color: "white",
      marginTop: 10,
    }, 


    card2:
    {
      width: '30%',
      height: '80',
      borderWidth: 2,
      backgroundColor: 'white',
    },

   // Signin with Imgae Background

    container3: {
      flex: 1,
      
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },


    // Dashboard

    dashboardSubtitle : 
    {
      color: 'white',
      fontSize: 17,
      padding: 10,
    },
    dashboardTitle: 
    {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
      padding: 10,
    }
  });