// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRBryvtdH3-hfvWmPBtfY3WwAg87PFxKU",
  authDomain: "neptuno-c2c7e.firebaseapp.com",
  projectId: "neptuno-c2c7e",
  storageBucket: "neptuno-c2c7e.appspot.com",
  messagingSenderId: "466200773404",
  appId: "1:466200773404:web:b4f9a3aacb0d58d6bab0d9",
  measurementId: "G-PEVP3H6HP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);