// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app' ;
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';






const firebaseConfig = {
  apiKey: "AIzaSyD6ZkXdaUlFSyCpt0AiG6E3d28WXQEqEpQ",
  authDomain: "g-forms-clone.firebaseapp.com",
  projectId: "g-forms-clone",
  storageBucket: "g-forms-clone.appspot.com",
  messagingSenderId: "227613365563",
  appId: "1:227613365563:web:54b917ec5d6924c4e9d31e",
  measurementId: "G-QBTV9T70P0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig) ;

export const auth = firebase.auth() ;

const firestore = firebase.firestore() ;

export const database = {
  users : firestore.collection('users')
}