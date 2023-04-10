import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSm_LMQuKi87vH_xqhC4bQYkBE5iCPJNs",
  authDomain: "auth-a7744.firebaseapp.com",
  projectId: "auth-a7744",
  storageBucket: "auth-a7744.appspot.com",
  messagingSenderId: "301869256040",
  appId: "1:301869256040:web:3a6ec577e5896b89df5add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
