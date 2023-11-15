// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSvlJeBtgQ2ERlo6VWw0jKkNx6ZRWm20",
  authDomain: "gncd-watch.firebaseapp.com",
  projectId: "gncd-watch",
  storageBucket: "gncd-watch.appspot.com",
  messagingSenderId: "650920129576",
  appId: "1:650920129576:web:8db34b06c58562d417311d",
  measurementId: "G-BQ15X353LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// setLogLevel("debug");