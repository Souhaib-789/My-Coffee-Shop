
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAjIks8eq20pcL_5ilIGKJNXENArL6_wVY",
    authDomain: "mycoffeeshop-326fb.firebaseapp.com",
    projectId: "mycoffeeshop-326fb",
    storageBucket: "mycoffeeshop-326fb.appspot.com",
    messagingSenderId: "45788465927",
    appId: "1:45788465927:web:8e9396983fa182666393a2",
    measurementId: "G-1FKQVQ0B4E"
};

const app = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseConfig);
const db = getFirestore();

export {
  db,
  onAuthStateChanged,
  // storage,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  app

}