// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export {auth} ;
