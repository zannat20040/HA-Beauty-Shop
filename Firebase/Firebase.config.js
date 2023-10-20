// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAUfF3uWK3DXy75P6bWgHnOoVE4WMLcv98",
  authDomain: "brand-shop-3c930.firebaseapp.com",
  projectId: "brand-shop-3c930",
  storageBucket: "brand-shop-3c930.appspot.com",
  messagingSenderId: "926084414938",
  appId: "1:926084414938:web:8a9953bb121f12d58294e3"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app