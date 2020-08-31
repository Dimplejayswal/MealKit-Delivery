import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Button } from 'react-native';
import firebase from "firebase"



function receipt({route,navigation}) {

    const mealname = route.params.ordername
    const mealprice = route.params.orderprice
    const tip = route.params.ordertip
    const tax = route.params.ordertax
    const total = route.params.totalprice
    const orderNo = route.params.Ordernum
    const email = route.params.custemail

    function orderhistory(){
        navigation.navigate("OrderHistory",{custemail:email})
      }

    const SignedOut = () =>{
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate("Login")
    }

   
    return(
    
        <SafeAreaView style={styles.container}>
            <Text style={styles.h2}>Receipt</Text>
            <Text style={styles.h2}>Order number : {orderNo}</Text>
            <Text style={styles.h1}>Meal Kit Name : {mealname}</Text>
            <Text style={styles.h1}>Meal Price : {mealprice}</Text> 
            <Text style={styles.h1}>Tax : ${tax}</Text>
            <Text style={styles.h1}>Tip : ${tip}</Text>
            <Text style={styles.h1}>Sub Total : ${total}</Text>

            <Button title="Sign out" 
            onPress={SignedOut}></Button>

            <Button title="Order History" 
            onPress={orderhistory}></Button>
          
       </SafeAreaView>
    );
}

export default receipt;

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
    h2:{
        fontSize:60,
    }
   
});