import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-50b4e.firebaseapp.com",
  projectId: "reactchat-50b4e",
  storageBucket: "reactchat-50b4e.appspot.com",
  messagingSenderId: "66431704816",
  appId: "1:66431704816:web:c8969769c8becbdf8cec35",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
