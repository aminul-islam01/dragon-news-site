// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpQc7GKlcYlX0HI7k69ERMGTcCAOKbiTM",
  authDomain: "dragon-news-site-8c9c4.firebaseapp.com",
  projectId: "dragon-news-site-8c9c4",
  storageBucket: "dragon-news-site-8c9c4.appspot.com",
  messagingSenderId: "1009083669855",
  appId: "1:1009083669855:web:d4a5f9d45a1f8d162daaea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;