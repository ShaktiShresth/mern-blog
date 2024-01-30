// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-62eaa.firebaseapp.com",
  projectId: "mern-blog-62eaa",
  storageBucket: "mern-blog-62eaa.appspot.com",
  messagingSenderId: "452730231937",
  appId: "1:452730231937:web:4e122443bef2675c5b8180",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
