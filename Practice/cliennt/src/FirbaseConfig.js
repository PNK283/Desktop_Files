import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB9QphY0FjkVK4dRiFYJolsffpZA0PJfJ8",
    authDomain: "emailauth-7b89e.firebaseapp.com",
    projectId: "emailauth-7b89e",
    storageBucket: "emailauth-7b89e.appspot.com",
    messagingSenderId: "1099106370106",
    appId: "1:1099106370106:web:968262843f23eec6fe2b03"
  };

  //initializing the fireabse
  export const app = initializeApp(firebaseConfig);

 //initializing the fireabse auth
  export const auth = getAuth(app);
