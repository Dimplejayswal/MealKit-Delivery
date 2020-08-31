import React,{useState, useEffect} from "react";
import {StyleSheet, SafeAreaView, View, Text, Button,Image,TouchableOpacity} from "react-native";
import firebase from "firebase"
import { TextInput } from "react-native-gesture-handler";

import db from "./firebaseConfig.js"


function mealdeatils({route,navigation}) {

    const mealname = route.params.name
    const mealprice = route.params.price
    const mealdescription = route.params.desc 
    const mealcalorie = route.params.calorie
    const mealimage = route.params.image
    const email = route.params.custemail
    const [gettip, settip] = useState("")
    const [gettotal,settotal] = useState((route.params.price)*1.13)
    var ordernum = Math.floor(Math.random() * 10000) + 1 ;
   

    const addNewOrder = () =>{
        db.collection('orders')
        .add({
            EmailId:email,
            mealCalories:mealcalorie,
            mealDescription:mealdescription,
            mealImage:mealimage,
            mealName:mealname,
            mealPrice:mealprice,
            mealorderNo:ordernum
        })
        .then(() => {
        });
       
    }

    const getReceipt = () =>{
        addNewOrder()
        navigation.navigate("Receipt",{ordername:mealname,orderprice:mealprice,ordertax:mealprice*0.13,ordertip:gettip,totalprice:gettotal,Ordernum:ordernum,custemail:email})
    }
    const SignedOut = () =>{
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate("Login")
    }
    

    
   
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>{mealname}</Text>
           {/* <Image
            source = {mealimage}
            style = {{width:1000,height:500, marginBottom:10}}
            /> */}
            <Text style={styles.h1}>{mealdescription}</Text>
            <Text style={styles.h1}>Calories: {mealcalorie}</Text>

            <Text  style={styles.h1}>Sub Total : ${mealprice}</Text> 
            <Text  style={styles.h1}>Tax : ${mealprice*0.13}</Text>

            <Text style={styles.h1}>Total :${gettotal}</Text>

            <Text  style={styles.h1}>Tip : ${gettip}</Text>
            <TextInput placeholder={"Enter tip value"} style={styles.h1} value={gettip}
            onChangeText={(value) =>{
                settip(value)
                settotal(parseFloat((mealprice*1.13)+parseFloat(value)))
            }}></TextInput>

            <View style={styles.buttonbtn}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={{color: " #123456", padding: 20,width:80,marginRight:20}} onPress={()=> {settotal(parseFloat(mealprice*1.23));settip(mealprice*0.1)}}><Text>10%</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={{color: " #ADD8E6", padding: 20,width:80,marginRight:20}} onPress={()=> {settotal(parseFloat(mealprice*1.33));settip(mealprice*0.2)}}><Text>20%</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={{color: " #ADD8E6", padding: 20,width:80,marginRight:20}} onPress={()=> {settotal(parseFloat(mealprice*1.43));settip(mealprice*0.3)}}><Text>30%</Text></TouchableOpacity>
            </View>
            </View>
            <Button title="Sign out" 
            style={styles.signoutbtn} 
            onPress={SignedOut}></Button>
            
             <Button 
                title="Pay"
                onPress={ getReceipt }
            />
        </SafeAreaView>
    );
}

export default mealdeatils;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize:40,
    },
    buttonContainer: {
        flex: 1,
      },
      buttonbtn:{
        flexDirection: 'row',
        width:200
      }
});