import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyDVaxzoSoDvDcJQWViSkfWJLM4FQEIIvHs",
  authDomain: "proyecto-final-85223.firebaseapp.com",
  projectId: "proyecto-final-85223",
  storageBucket: "proyecto-final-85223.firebasestorage.app",
  messagingSenderId: "702656010724",
  appId: "1:702656010724:web:3debb90cabbb4389630ff1",
  measurementId: "G-9X2Y6594TP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
