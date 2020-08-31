import React , {useEffect, useState} from 'react';
// import {meals} from "./MealOptions";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, Button, Text, FlatList, View, Image} from 'react-native';
import db from "./firebaseConfig.js"



export default function MealKitScreen({route,navigation}){

    const [getmeals, setmeals] = useState([]);
    const list = [];
    
    const email = route.params.custemail
    
      function orderhistory(){
        navigation.navigate("OrderHistory",{custemail:email})
      }

    const generateRow = ({item}) => (
        <TouchableOpacity 
        key={item.id}
        style={{marginBottom:20}} 
        onPress={() => navigation.navigate("MealDetail",{custemail:email,name:item.getmealname,price:item.getmealprice,desc:item.getmealdesc,calorie:item.getmealcalorie,image:item.getmealimage})}
        >
            <Image
            source = {item.getmealimage}
            style = {{width:1000,height:500, marginBottom:10}}
            />
          <Text style={{fontSize:24, padding:5,color:"#FF0000",textAlign:"center"}}>{item.getmealname} cuisine</Text>
          <Text style={{fontSize:14, padding:5,color:"#333",textAlign:"center"}}>{item.getmealdesc}</Text>
          <Text style={{fontSize:14, padding:5,color:"#712",textTransform:"uppercase",textAlign:"center"}}>Price: ${item.getmealprice}/week</Text>
          <Text style={{fontSize:14, padding:5,color:"#123",textAlign:"center"}}>Calorie count: {item.getmealcalorie}</Text>
        </TouchableOpacity>
    )

      

    useEffect(() =>{
      db.collection('MealKits')
      .get()
      .then(querySnapshot => {
        

        querySnapshot.forEach(documentSnapshot => {
         list.push({
           id: documentSnapshot.id,
           getmealname : documentSnapshot.data().mealName,
           getmealprice : documentSnapshot.data().mealPrice,
           getmealdesc: documentSnapshot.data().mealDescription,
           getmealcalorie: documentSnapshot.data().mealCalories,
           getmealimage: documentSnapshot.data().mealImage          
         })         
        });

        setmeals(list);
      });
    },[])
    
    return(
        <View style={styles.container}>
          <Button title="Order History" onPress={orderhistory}></Button>
               <Image source={require("./assets/Healthyfood.gif")}
               style={{height:120,marginBottom:20,width:100}}
               resizeMode="contain"/>

                   <FlatList
                     data={getmeals}
                        renderItem={generateRow}
                        keyExtractor={meals => meals.mealname}
      /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent:'center',
      
     
    },

  });
  