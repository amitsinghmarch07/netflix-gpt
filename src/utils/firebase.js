// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAMC88pKrMB_DzBayfpMPO2zWT-ILNQTw",
  authDomain: "netflixgpt-47e1b.firebaseapp.com",
  projectId: "netflixgpt-47e1b",
  storageBucket: "netflixgpt-47e1b.appspot.com",
  messagingSenderId: "224825971298",
  appId: "1:224825971298:web:e16aef6824d6c5837f373b",
  measurementId: "G-1FC5M3KCLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
