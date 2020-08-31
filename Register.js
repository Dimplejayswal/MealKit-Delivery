import React,{useState} from "react";
import {StyleSheet, SafeAreaView, Button, Text, TextInput,View,ImageBackground} from "react-native";
import firebase from "firebase"
import db from "./firebaseConfig.js"



function RegisterScreen({navigation}){
    const [fname, fnameChanged] = useState("")
    const [lname, lnameChanged] = useState("")
    const [email, emailChanged] = useState("")
    const [password, passwordChanged] = useState("")
    const [phonenumber, numberChanged] = useState("")
  
    const segueToNextScreen=()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() =>{
            navigation.navigate("Login")
        })
        .catch(()=>{
            alert("Invalid email or password")
        })
       
        }



    const addNewPerson = () =>{
        db.collection('users')
        .add({
            firstname:fname,
            lastname:lname,
            EmailId:email,
            Password:password,
            PhoneNumber:phonenumber
        })
        .then(() => {
            fnameChanged("")
            lnameChanged("")
            emailChanged("")
            passwordChanged("")
            numberChanged("")
        });

      segueToNextScreen();
       
    }
    
    return(
       
        <SafeAreaView style={styles.container}>
          

         <Text style={{color:"red",textAlign:"center",fontSize:26}}>FirstName</Text>  
        <TextInput placeholder="Please enter your Firstname" 
        style={styles.h2}
        value={fname}
        onChangeText={text => fnameChanged(text)}
        />

        <Text style={{color:"red",textAlign:"center",fontSize:26}}>Lastname</Text> 
          <TextInput placeholder="Please enter your Lastname" 
        style={styles.h2}
        value={lname}
        onChangeText={text => lnameChanged(text)}
       />
        <Text style={{color:"red",textAlign:"center",fontSize:26}}>Email Id</Text> 
        <TextInput placeholder="Please enter your Email Id" 
         style={styles.h2}
         value={email}
        onChangeText={text => emailChanged(text)}
       
        />
         <Text style={{color:"red",textAlign:"center",fontSize:26}}>Password</Text> 
          <TextInput placeholder="Please enter your Password" 
        style={styles.h2}
        onChangeText={text => passwordChanged(text)}
        value={password}
        />
         <Text style={{color:"red",textAlign:"center",fontSize:26}}>Phone Number</Text> 
        <TextInput placeholder="Please enter your Phone Number" 
        style={styles.h2}
        onChangeText={text => numberChanged(text)}
        value={phonenumber}
        />

        <View style={{width:100,flexDirection:'row',textAlign:"center"}}>
        <Button title="Register" 
        onPress={addNewPerson}/>
        </View>
        
        </SafeAreaView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
    },
    
    h2:{
        marginBottom:50,
        color:"red",
        textAlign:"center",
        height:60,
        fontSize:20,
        width:500
    },
   image:{
    height:800,
    width:1660
   }
})