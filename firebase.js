import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyC_Yr6hK37zVvBlowZSf6pPd4XCRMIQVEI",
  authDomain: "aptreact-8ba87.firebaseapp.com",
  databaseURL: "https://aptreact-8ba87-default-rtdb.firebaseio.com",
  projectId: "aptreact-8ba87",
  storageBucket: "aptreact-8ba87.appspot.com",
  messagingSenderId: "896069072248",
  appId: "1:896069072248:web:4aeb0994d094cfe61e848d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export const getStorage = () => firebase.storage();
export default firebase;
export { db };
export const auth = firebase.auth();
