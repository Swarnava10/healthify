import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA9_zfRmVPs6nVp-g1kDDr5hOSwMGbKBLc",
  authDomain: "healthifyhackathon.firebaseapp.com",
  projectId: "healthifyhackathon",
  storageBucket: "healthifyhackathon.appspot.com",
  messagingSenderId: "498735992762",
  appId: "1:498735992762:web:e11c50e16cccea447f1783"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp)
const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();




export {auth,googleProvider};
export default database;