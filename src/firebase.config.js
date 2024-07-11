// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYqNnydpbXrmVrQ2aDL5mI9WoVrYzYIGQ",
  authDomain: "multimart-21002.firebaseapp.com",
  projectId: "multimart-21002",
  storageBucket: "multimart-21002.appspot.com",
  messagingSenderId: "725172789100",
  appId: "1:725172789100:web:f71f5196f9d6af42f19d49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
