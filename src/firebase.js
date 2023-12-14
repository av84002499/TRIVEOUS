import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6k3brM126GdYbUDZV8R68MGwfSCQki1Q",
  authDomain: "triveous-55e9c.firebaseapp.com",
  projectId: "triveous-55e9c",
  storageBucket: "triveous-55e9c.appspot.com",
  messagingSenderId: "801015319857",
  appId: "1:801015319857:web:1e9c2779bfa1759d68f410",
  measurementId: "G-KPBFNYNFG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };