// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHzZ3lNO4zoM5tQ5_A4M2HloBA2iKU41M",
  authDomain: "instagram-clone-ebe41.firebaseapp.com",
  projectId: "instagram-clone-ebe41",
  storageBucket: "instagram-clone-ebe41.appspot.com",
  messagingSenderId: "395504184231",
  appId: "1:395504184231:web:b36f554b7ca2d844d02482",
  measurementId: "G-Y6YBXV8H16",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
