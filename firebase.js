// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABmhMkHSfGrW8OM7_Xpm_5eHA5JHn0Tc4",
  authDomain: "firechat-ffd43.firebaseapp.com",
  projectId: "firechat-ffd43",
  storageBucket: "firechat-ffd43.appspot.com",
  messagingSenderId: "1060880283727",
  appId: "1:1060880283727:web:51717eb9f31b0b9c1b923a",
  measurementId: "G-B4PBF5QPGV",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const storage = getStorage(firebase);

export { auth, firebase, db, storage };
