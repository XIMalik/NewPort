import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2G2qENXsnvnQ1gIyHybxwyXkP6ni8GtY",
  authDomain: "portfolio-210501.firebaseapp.com",
  projectId: "portfolio-210501",
  storageBucket: "portfolio-210501.firebasestorage.app",
  messagingSenderId: "336855078406",
  appId: "1:336855078406:web:0636ad6dcc9f7c26191587",
  measurementId: "G-KPX7K678GY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
