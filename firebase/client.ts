// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8iZi9PYnq_knFBZ3Me_gNm9obrUjgdOU",
  authDomain: "preptalkai-89.firebaseapp.com",
  projectId: "preptalkai-89",
  storageBucket: "preptalkai-89.firebasestorage.app",
  messagingSenderId: "970572720743",
  appId: "1:970572720743:web:cfe756c00a1d5d65e7c2c2",
  measurementId: "G-GBFZ24JMWL",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
