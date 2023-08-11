import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

// Replace this with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnNW06rCRrmuscM4IJZveVLuhQgcyGMJU",
  authDomain: "ticketing-system-adc5b.firebaseapp.com",
  projectId: "ticketing-system-adc5b",
  storageBucket: "ticketing-system-adc5b.appspot.com",
  messagingSenderId: "814092958752",
  appId: "1:814092958752:web:1d501b0549dfdf26d81045",
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export const auth = getAuth(app);
export default app;
