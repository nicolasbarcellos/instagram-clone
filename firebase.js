import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiAW2epBhiK2RHSAU3Rd0uDCdZyGuV1S4",
  authDomain: "insta-clone-99d8e.firebaseapp.com",
  projectId: "insta-clone-99d8e",
  storageBucket: "insta-clone-99d8e.appspot.com",
  messagingSenderId: "244401304100",
  appId: "1:244401304100:web:80ad0e6f05184443c35eb1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
