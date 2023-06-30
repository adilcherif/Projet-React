// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeD0lAtUF2yMT5Qy7KPe6mCn5Fpl896mE",
  authDomain: "projet-musee.firebaseapp.com",
  projectId: "projet-musee",
  storageBucket: "projet-musee.appspot.com",
  messagingSenderId: "12767558463",
  appId: "1:12767558463:web:e9f29de60edc70b1d5718a",
  measurementId: "G-YD1LY61D4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)