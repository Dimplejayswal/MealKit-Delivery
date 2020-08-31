import React,{useState,useEffect} from "react";
import {StyleSheet, SafeAreaView, View, Text, Button,Image,TouchableOpacity,FlatList} from "react-native";
import firebase from "firebase"
import { TextInput } from "react-native-gesture-handler";

import db from "./firebaseConfig.js"
function orderhistory({route,navigation}) {
    const [getmeals, setmeals] = useState([]);
    const list = [];

    const email = route.params.custemail
   
    const generateRow = ({item}) => (
        <TouchableOpacity>
          
    <Text style={{fontSize:24, padding:5,color:"#FF0000"}}>Order number: {item.getordernum}</Text>
          <Text style={{fontSize:24, padding:5,color:"#FF0000"}}>{item.getmealname} cuisine</Text>
          <Text style={{fontSize:14, padding:5,color:"#333"}}>{item.getmealdesc}</Text>
          <Text style={{fontSize:14, padding:5,color:"#712",textTransform:"uppercase"}}>Price: ${item.getmealprice}/week</Text>
          <Text style={{fontSize:14, padding:5,color:"#123"}}>Calorie count: {item.getmealcalorie}</Text>

        </TouchableOpacity>
    )




    useEffect(() =>{
        db.collection('orders')
        .get()
        .then(querySnapshot => {
          
  
          querySnapshot.forEach(documentSnapshot => {
              if(documentSnapshot.data().EmailId === email){

                list.push({
                    id: documentSnapshot.id,
                    getmealname : documentSnapshot.data().mealName,
                    getmealprice : documentSnapshot.data().mealPrice,
                    getmealdesc: documentSnapshot.data().mealDescription,
                    getmealcalorie: documentSnapshot.data().mealCalories,  
                    getordernum : documentSnapshot.data().mealorderNo   
                  })

              }
                    
          });
  
          setmeals(list);
        });
      },[])
      
       

   
    return(
        <SafeAreaView style={styles.container}>
             <FlatList
                     data={getmeals}
                        renderItem={generateRow}
                        keyExtractor={meals => meals.mealname}
      /> 
        </SafeAreaView>
    );
}

export default orderhistory;

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