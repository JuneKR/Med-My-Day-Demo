// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoOz7-SguLNzIFMhOmMwjZztJPL2EXX2w",
  authDomain: "med-my-day.firebaseapp.com",
  projectId: "med-my-day",
  storageBucket: "med-my-day.appspot.com",
  messagingSenderId: "779535392041",
  appId: "1:779535392041:web:e620abe05a7ecb22022b38",
  measurementId: "G-QYQSD0X8D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
