import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBMHk6ch_-uJ_nVUjHnYLUS6NctnCpf6t0",
  authDomain: "learn-vuejs-6f9c6.firebaseapp.com",
  projectId: "learn-vuejs-6f9c6",
  storageBucket: "learn-vuejs-6f9c6.appspot.com",
  messagingSenderId: "255041477154",
  appId: "1:255041477154:web:5317397b0a1508a822487b",
  measurementId: "G-SWE45BKKRQ",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
