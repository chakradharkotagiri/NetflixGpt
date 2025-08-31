// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHY0e2hV53xE580ydLABp915GatUL2mU8",
  authDomain: "netflixgpt-10c2b.firebaseapp.com",
  projectId: "netflixgpt-10c2b",
  storageBucket: "netflixgpt-10c2b.firebasestorage.app",
  messagingSenderId: "849320149528",
  appId: "1:849320149528:web:1b31c4a51826077520396d",
  measurementId: "G-NKRDRB78LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
