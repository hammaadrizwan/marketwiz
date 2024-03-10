import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore function
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRzpqvYoRbVVOhfGFcUujkEc8lEAnoGAg",
  authDomain: "marketwiz-90df4.firebaseapp.com",
  projectId: "marketwiz-90df4",
  storageBucket: "marketwiz-90df4.appspot.com",
  messagingSenderId: "182502739522",
  appId: "1:182502739522:web:fd90c7fabe8e1f453427db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore instance
