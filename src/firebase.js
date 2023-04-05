// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbhNlRmrAI7WQSPEI8RX1KIPgK6DnMnwo",
  authDomain: "skydome-bba13.firebaseapp.com",
  projectId: "skydome-bba13",
  storageBucket: "skydome-bba13.appspot.com",
  messagingSenderId: "1052098687923",
  appId: "1:1052098687923:web:4f34d8fd0602829997d1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);