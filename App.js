import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import register from "./Register"
import login from "./Login"
import meal from "./MealKit"
import mealdetails from "./mealdetails"
import oderhistory from "./orderHistory"
import receipt from "./Receipt"

import {NavigationContainer} from "@react-navigation/native"
 import {createStackNavigator} from "@react-navigation/stack"
 const Stack = createStackNavigator();


export default function App() {
  return (
 <NavigationContainer>

<Stack.Navigator>

    <Stack.Screen name="Login" component={login}/>
     <Stack.Screen name="Register" component={register}/>
     <Stack.Screen name="MealKit" component={meal}/>
     <Stack.Screen name="MealDetail" component={mealdetails}/>
     <Stack.Screen name="Receipt" component={receipt}/>
     <Stack.Screen name="OrderHistory" component={oderhistory}/>
    
    
      </Stack.Navigator>
  
 </NavigationContainer>
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
