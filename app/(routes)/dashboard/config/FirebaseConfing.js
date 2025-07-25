// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "meeting-ff3f6.firebaseapp.com",
    projectId: "meeting-ff3f6",
    storageBucket: "meeting-ff3f6.firebasestorage.app",
    messagingSenderId: "636583126516",
    appId: "1:636583126516:web:8a35b625db0ac001fc05a1",
    measurementId: "G-TJV39RRNKC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);