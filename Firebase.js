// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// impot authentication
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbQJ5R7zxK_yB2EFjIdy7TpHCOoh_ZNE0",
  authDomain: "bookie-ced74.firebaseapp.com",
  projectId: "bookie-ced74",
  storageBucket: "bookie-ced74.appspot.com",
  messagingSenderId: "138404273756",
  appId: "1:138404273756:web:c67d08c3679f82b0051099",
  measurementId: "G-M1SH01YPDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

//authenticating the app
export const auth = getAuth(app);
export const db = getFirestore(app);