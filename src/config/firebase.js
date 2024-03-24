import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYUNuIhdGsLNWryzvaTnpFbalsZKnyZAM",
  authDomain: "ideology-410c7.firebaseapp.com",
  projectId: "ideology-410c7",
  storageBucket: "ideology-410c7.appspot.com",
  messagingSenderId: "792306987086",
  appId: "1:792306987086:web:5337bb413fcff2d0f2531f",
  measurementId: "G-LGN9FGX1VW"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

export const auth = getAuth(app)

