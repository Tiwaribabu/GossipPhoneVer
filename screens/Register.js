import React, { useState, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text, TouchableOpacity, Image, ActivityIndicator,Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../firebase';

const screenheight = Dimensions.get("window").height;

export default function Register({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState('');
  const recaptchaVerifier = useRef(null);

  const openLoginScreen = () => {
    navigation.navigate('Login');
  };

  const handleSendOtp = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );

      setVerificationId(verificationId);
      Alert.alert('Verification code has been sent to your phone.');

    } catch (error) {
      console.log(error);
      Alert.alert('Failed to send verification code.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );

      await firebase.auth().signInWithCredential(credential);
      Alert.alert('Successfully authenticated with phone number!');
      navigation.navigate('Chats')
    } catch (error) {
      console.log(error);
      Alert.alert('Failed to verify OTP.');
    }
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/Flash.jpg')} style={styles.background} resizeMode="cover">
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Animatable.View animation="slideInUp" style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to Chat App</Text>
          <Text style={styles.subTitle}>Connect with friends globally</Text>
          <Input
            placeholder='Phone Number'
            leftIcon={<Icon name='phone' size={18} color='grey' />}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            autoCapitalize='none'
            autoCompleteType='tel'
            keyboardType='phone-pad'
          />
          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
          <Input
            placeholder='OTP'
            leftIcon={<Icon name='lock' size={18} color='grey' />}
            value={code}
            onChangeText={(text) => setCode(text)}
            autoCapitalize='none'
            autoCompleteType='password'
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openLoginScreen}>
            <Text style={styles.signUpText}>Already a user? Sign in</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: screenheight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderTopEndRadius: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#064663',
    marginBottom: 10,
    textAlign: 'center',
  },


  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#064663',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  messageText: {
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  loadingText: {
    color: '#064663',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    width: '60%',
    height: 40,
    backgroundColor: '#FAAB78',
    justifyContent: 'center',
    alignItems:'center', 
     borderRadius :5, 
     marginTop :10
     },
  buttonText :{
    fontWeight:'bold', 
    color:'#064663', 
    fontSize :20
     },
   forgotPasswordText :{
    fontWeight:'bold', 
    color:'#064663', 
    fontSize :15, 
    marginTop :10
     },
   signUpText :{
    fontWeight:'bold', 
    color:'#064663', 
    fontSize :15, 
    marginTop :10
     }
});
