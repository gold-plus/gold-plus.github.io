// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6PmQ5li6ZISZ0QvBdKHeO6W5_gbUp0I4",
  authDomain: "goldclient.firebaseapp.com",
  projectId: "goldclient",
  storageBucket: "goldclient.firebasestorage.app",
  messagingSenderId: "417304448652",
  appId: "1:417304448652:web:981f15f8d30a73d597b5a9",
  measurementId: "G-MCW5SZ63TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
