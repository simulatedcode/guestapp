import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3oyiHyVupL6qr8OL7cJP1Ktp6QysSI_4",
  authDomain: "rumahivaa.firebaseapp.com",
  projectId: "rumahivaa",
  storageBucket: "rumahivaa.appspot.com",
  messagingSenderId: "1087033908082",
  appId: "1:1087033908082:web:7927c1bf861d6967cc9beb",
  measurementId: "G-N2P2VEJ01T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const db = getFirestore(app);

export { app };
