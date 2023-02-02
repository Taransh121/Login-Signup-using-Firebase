// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6qsIseTvkAXz8OkI9YB_NJpSMtg0o4rE",
    authDomain: "login-signup-77a32.firebaseapp.com",
    projectId: "login-signup-77a32",
    storageBucket: "login-signup-77a32.appspot.com",
    messagingSenderId: "1006721623938",
    appId: "1:1006721623938:web:e73c53440340a3a011919b",
    measurementId: "G-8BW51M8EWL"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;