// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXN-m-1ZfFcopNKYXDPT1s_UgsJZVYZC0",
  authDomain: "react-cursos-edgardo.firebaseapp.com",
  projectId: "react-cursos-edgardo",
  storageBucket: "react-cursos-edgardo.appspot.com",
  messagingSenderId: "277732558138",
  appId: "1:277732558138:web:f0a5e3197c93de02743c03",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
