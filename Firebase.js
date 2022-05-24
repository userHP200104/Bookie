// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// import authentication
import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8mysEv35PIKEEX74ETV681obnXLYcyjg",
  authDomain: "awesome-class-project-529c0.firebaseapp.com",
  projectId: "awesome-class-project-529c0",
  storageBucket: "awesome-class-project-529c0.appspot.com",
  messagingSenderId: "915565918402",
  appId: "1:915565918402:web:4892b1a0e9e8888f60e35b",
  measurementId: "G-YR6YCH9ZN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create initial instance of auth functionality
export const auth = getAuth(app)