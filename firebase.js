import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration
export const firebaseConfig = {
     apiKey: "AIzaSyC_Yr6hK37zVvBlowZSf6pPd4XCRMIQVEI",
     authDomain: "aptreact-8ba87.firebaseapp.com",
     databaseURL: "https://aptreact-8ba87-default-rtdb.firebaseio.com",
     projectId: "aptreact-8ba87",
     storageBucket: "aptreact-8ba87.appspot.com",
     messagingSenderId: "896069072248",
     appId: "1:896069072248:web:4aeb0994d094cfe61e848d"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Create Firestore instance
const db = firebase.firestore();

// Export Firebase and Firestore instances
export default firebase;
export { db };
export const auth = firebase.auth();
