// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estatehos.firebaseapp.com",
  projectId: "mern-estatehos",
  storageBucket: "mern-estatehos.appspot.com",
  messagingSenderId: "391210529236",
  appId: "1:391210529236:web:293ec70787584d45202641",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
