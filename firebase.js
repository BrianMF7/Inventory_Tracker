// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1qcOyAryKcWN6oORkG-fhr6MlcKr9ohM",
  authDomain: "inventory-management-75f5d.firebaseapp.com",
  projectId: "inventory-management-75f5d",
  storageBucket: "inventory-management-75f5d.appspot.com",
  messagingSenderId: "952643475158",
  appId: "1:952643475158:web:a95fe02fda0a9c758a9b77",
  measurementId: "G-2JP1Q6C5F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}