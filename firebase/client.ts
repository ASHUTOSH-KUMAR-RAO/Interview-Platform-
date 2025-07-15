
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase-admin/auth";
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZDA8S6sRJsy3kpNT_6VduY4NsDwHggYQ",
  authDomain: "prepwise-b4f72.firebaseapp.com",
  projectId: "prepwise-b4f72",
  storageBucket: "prepwise-b4f72.firebasestorage.app",
  messagingSenderId: "3393822657",
  appId: "1:3393822657:web:ca2617621cf48feffa1940",
  measurementId: "G-K3Y8GJMNXT"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp()

export const auth = getAuth(app)

export const db = getFirestore(app)