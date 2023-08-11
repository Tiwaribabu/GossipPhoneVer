import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/Flash.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Animatable.View animation="bounceIn" duration={2000} style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to Chat App</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={2000} style={styles.animationContainer}>
          <Image source={require('../assets/ChatAnimation.gif')} style={styles.animation} />
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" duration={1500} style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: screenheight,
    width: screenwidth,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#064663',
    marginTop: 10,
    textAlign: 'center',
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150, // Increased button width
    height: 60, // Increased button height
    backgroundColor: '#FAAB78',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#064663',
    fontSize: 20,
  },
});
