import firebase from 'firebase/compat/app' ;
// import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore' ;
import 'firebase/compat/auth' ;
import 'firebase/compat/storage' ;



const firebaseConfig = {
  apiKey: "AIzaSyAN9GTALfIjmyuERm4ESphzAv6HX0KumJY",
  authDomain: "lifterreels.firebaseapp.com",
  projectId: "lifterreels",
  storageBucket: "lifterreels.appspot.com",
  messagingSenderId: "781400502978",
  appId: "1:781400502978:web:f93cd947fe5fadbfe7015b",
  measurementId: "G-V7S263HK2V"
};

firebase.initializeApp(firebaseConfig) ;

export const auth = firebase.auth() ;

export const storage = firebase.storage() ;

const firestore = firebase.firestore() ;

export const database = {
    users : firestore.collection('users') ,
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp 
}
