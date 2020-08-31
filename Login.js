import React,{useState} from "react";
import {StyleSheet, SafeAreaView, Button, Text, TextInput, ImageBackground, View} from "react-native";

const image = require("./assets/loginpage.jpg");
import firebase from "firebase"


function LoginScreen({navigation}){

    const [email, emailChanged] = useState("")
    const [password, passwordChanged] = useState("")

    const segueToNextScreen=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() =>{
            navigation.navigate("MealKit",{custemail:email});
            
        })
        .catch(()=>{
            alert("Invalid email or password")
        })
       
        }
   
        const segueToRegisterScreen=()=>{
         navigation.navigate("Register");

        }

         const seguetophoneScreen = ()=>{
        navigation.navigate("googlesignin");
         }  
        
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
       
        <Text style={styles.labelemail}>Email Id</Text>
        <TextInput placeholder="Enter your email..." 
         style={styles.textemail}
        onChangeText={text => emailChanged(text)}
        autoCorrect={false}
        value={email}
        />
        <Text style={styles.labelpassword}>Password</Text>
        <TextInput placeholder="Enter your password" 
        style={styles.textpassword}
        onChangeText={text => passwordChanged(text)}
        secureTextEntry
        value={password}
        />

            <View style={{flexDirection:'row',marginLeft:650}}>
           
                   
                    
                    <View style={styles.buttonview}>
                    <Button title="Register" style={styles.h2}
                    onPress={segueToRegisterScreen}/>
                    </View>

                    <View style={styles.buttonview} >
                    <Button title="Sign In"
                    onPress={segueToNextScreen}/>
                    </View>
            </View>
       
        
            </ImageBackground>
        </SafeAreaView>

        
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
    },
    h1:{
        fontSize:40,
        textAlign:'center',

    },
    labelemail:{
        fontSize:30,
        color:"red",
        marginLeft:650,
        marginTop:500
    },
    labelpassword:{
        fontSize:30,
        color:"red",
        marginLeft:650,
    },
    textemail:{
        fontSize:20,
        color:"red",
        height:30,
        marginLeft:650,
        
    },
    textpassword:{
        fontSize:20,
        marginLeft:650,
        marginBottom:100
    },
    image: {
        flex: 1,
        width:400,
          
      },
    buttonview:{
        marginRight:10,
        
    }

})