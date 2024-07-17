// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL29oDb1QAJ4ztCpHkhzw-g8Ns03M6b3s",
  authDomain: "furniture-mart-e684d.firebaseapp.com",
  projectId: "furniture-mart-e684d",
  storageBucket: "furniture-mart-e684d.appspot.com",
  messagingSenderId: "566288544811",
  appId: "1:566288544811:web:a569b96227a26fb36aa66e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
