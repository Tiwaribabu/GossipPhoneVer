import { StyleSheet, Text, View,LogBox } from 'react-native'
import React from 'react'
import firebase from '../firebase';


import{ useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";


export default function LoadingScreen ({navigation}) {
 

 

  useEffect(() => {
   
  onAuthStateChanged(auth,(user) => {
          
      if (user) {
        
        navigation.navigate('Chats')
       
        // ...
      }
      else{
       navigation.navigate('SplashScreen')
      } 
    });
      
   
      
   
  }, [])
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};






const styles = StyleSheet.create({})



