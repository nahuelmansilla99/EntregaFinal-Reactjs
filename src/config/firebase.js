// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlKipJc5_pRmTOOpL64AQ3oZIgD_1c3tQ",
  authDomain: "entregafinal-mansilla.firebaseapp.com",
  projectId: "entregafinal-mansilla",
  storageBucket: "entregafinal-mansilla.appspot.com",
  messagingSenderId: "627160485670",
  appId: "1:627160485670:web:c1d317de530fdf217b3be7",
  measurementId: "G-02PHFS5P89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);