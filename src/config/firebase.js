// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIRESTORE}`,
  authDomain: "hive-mind-4a430.firebaseapp.com",
  projectId: "hive-mind-4a430",
  storageBucket: "hive-mind-4a430.appspot.com",
  messagingSenderId: "417188081320",
  appId: "1:417188081320:web:01d66dad377a61f3141c9d",
  measurementId: "G-3DHC1VY7F8",
  experimentalForceLongPolling: true,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
