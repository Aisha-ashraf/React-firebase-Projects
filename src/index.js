import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrkiqk5kgjf0GIClo2Xv33DkTNqfKkfLM",
  authDomain: "react-chat-app-f9e3f.firebaseapp.com",
  databaseURL: "https://react-chat-app-f9e3f-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-f9e3f",
  storageBucket: "react-chat-app-f9e3f.appspot.com",
  messagingSenderId: "1095133756918",
  appId: "1:1095133756918:web:ce0adbe22ea2b9ff4b9bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
