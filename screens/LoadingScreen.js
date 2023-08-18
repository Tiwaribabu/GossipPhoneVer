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
    <View style = {{alignSelf:'center',justifyContent:'center',marginTop:200}}>
      <Text style ={{textAlign:'center',fontSize:25,color:'blue'}}>
        Loading!!!
      </Text>
    </View>
  );
};






const styles = StyleSheet.create({})



