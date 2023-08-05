// //import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signOut
//   // signInWithEmailAndPassword,
//   // createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { initializeFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyC_Yr6hK37zVvBlowZSf6pPd4XCRMIQVEI",
//   authDomain: "aptreact-8ba87.firebaseapp.com",
//   databaseURL: "https://aptreact-8ba87-default-rtdb.firebaseio.com",
//   projectId: "aptreact-8ba87",
//   storageBucket: "aptreact-8ba87.appspot.com",
//   messagingSenderId: "896069072248",
//   appId: "1:896069072248:web:4aeb0994d094cfe61e848d"
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export const storage = getStorage(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import 'firebase/firebase-functions';

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

// Export Firebase instance
export default firebase;

