// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  databaseURL: import.meta.env.VITE_databaseURL,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCtAVSmdriy-8JhZ3qZXIOqs1etHcTwtdU",
//   authDomain: "fashionmaster-64d4f.firebaseapp.com",
//   databaseURL: "https://fashionmaster-64d4f-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fashionmaster-64d4f",
//   storageBucket: "fashionmaster-64d4f.appspot.com",
//   messagingSenderId: "231452534300",
//   appId: "1:231452534300:web:c2ed3ec6ff4f7aeb4161d9",
//   measurementId: "G-YXJVSK10XN"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
