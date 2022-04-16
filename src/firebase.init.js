import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAN2CqYiYpNEyISIW2h0w9IDoLmcAmFES8",
  authDomain: "conceptual-react-auth.firebaseapp.com",
  projectId: "conceptual-react-auth",
  storageBucket: "conceptual-react-auth.appspot.com",
  messagingSenderId: "405325374522",
  appId: "1:405325374522:web:3e2cfaafbb29cd5249c103"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
