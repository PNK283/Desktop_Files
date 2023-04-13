// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9QphY0FjkVK4dRiFYJolsffpZA0PJfJ8",
  authDomain: "emailauth-7b89e.firebaseapp.com",
  projectId: "emailauth-7b89e",
  storageBucket: "emailauth-7b89e.appspot.com",
  messagingSenderId: "1099106370106",
  appId: "1:1099106370106:web:968262843f23eec6fe2b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
  