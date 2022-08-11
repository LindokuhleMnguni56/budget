// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHQLgU50FeYyz4TiGearJs6Eq1w0XANfE",
  authDomain: "budgetapp-84f67.firebaseapp.com",
  projectId: "budgetapp-84f67",
  storageBucket: "budgetapp-84f67.appspot.com",
  messagingSenderId: "729774123734",
  appId: "1:729774123734:web:e00adb20b6d72d39c73777",
  measurementId: "G-EX26MSC39P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db} ;
