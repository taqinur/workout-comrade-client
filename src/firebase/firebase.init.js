// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo46V5S4Lso0ha1hq37nY7y_8KD39Tquk",
  authDomain: "workout-comrade.firebaseapp.com",
  projectId: "workout-comrade",
  storageBucket: "workout-comrade.appspot.com",
  messagingSenderId: "125601072652",
  appId: "1:125601072652:web:1ad380d22ebb423ca49029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;