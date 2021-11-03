// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa9Fd1kmEZQskbHYcs9TZ9OwfRsa8CwR8",
  authDomain: "dolby-classroom.firebaseapp.com",
  projectId: "dolby-classroom",
  storageBucket: "dolby-classroom.appspot.com",
  messagingSenderId: "696664392582",
  appId: "1:696664392582:web:1a3dabb7ea64488dcd2207",
  measurementId: "G-VSC5HH0SCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
