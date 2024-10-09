// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEl8b_k_ABWdyHC3wmIJ6uKpRzUSZDnXA",
  authDomain: "cimet-project.firebaseapp.com",
  projectId: "cimet-project",
  storageBucket: "cimet-project.appspot.com",
  messagingSenderId: "128914767060",
  appId: "1:128914767060:web:8effed65d16cd4f8d10f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,app,db}