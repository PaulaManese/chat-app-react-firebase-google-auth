// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBho8j2gNAWjmDAP8c5Edax0e0NNZ1JGbo",
  authDomain: "chat-app-802dd.firebaseapp.com",
  projectId: "chat-app-802dd",
  storageBucket: "chat-app-802dd.appspot.com",
  messagingSenderId: "197645645457",
  appId: "1:197645645457:web:b8ad1be44a89c53800b130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)