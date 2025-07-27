import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <--- add this import

const firebaseConfig = {
  apiKey: "AIzaSyCrx6YRnECLoBO-QeyEXU2Sql4zzMYhNFs",
  authDomain: "e-commerce-203c7.firebaseapp.com",
  projectId: "e-commerce-203c7",
  storageBucket: "e-commerce-203c7.firebasestorage.app",
  messagingSenderId: "523813610293",
  appId: "1:523813610293:web:088fc8b800c67d7c74627c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // <--- export Firestore db
