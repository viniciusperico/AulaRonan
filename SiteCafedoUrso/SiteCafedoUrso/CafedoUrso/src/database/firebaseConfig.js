// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm6wBUvWCPLKrvfxmK9KozOusoC5k6omQ",
  authDomain: "dogcatveterinaria-9f9a0.firebaseapp.com",
  projectId: "dogcatveterinaria-9f9a0",
  storageBucket: "dogcatveterinaria-9f9a0.appspot.com",
  messagingSenderId: "242014977349",
  appId: "1:242014977349:web:d94e07fcb7e5ef2901922c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };