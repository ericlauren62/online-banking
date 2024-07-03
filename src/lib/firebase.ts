import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_fZTMsPVnpwnNI-6GVjsGjmVE3mTkm68",
  authDomain: "horizonnbanks.firebaseapp.com",
  projectId: "horizonnbanks",
  storageBucket: "horizonnbanks.appspot.com",
  messagingSenderId: "475269386463",
  appId: "1:475269386463:web:90ab54031c424f51a2596a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
