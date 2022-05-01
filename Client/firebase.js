// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" 
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIngiF9VfEOTzWhC5BBIPkS4iDpUcgHzM",
  authDomain: "trading-zilla-dev.firebaseapp.com",
  projectId: "trading-zilla-dev",
  storageBucket: "trading-zilla-dev.appspot.com",
  messagingSenderId: "32806743022",
  appId: "1:32806743022:web:c0f3e5b8c90d69f88d3cff"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app)

export { app, db, storage, auth };