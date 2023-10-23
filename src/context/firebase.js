import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiRny5IutBfQhVflLaKYayT43qAVHuQ2E",

  authDomain: "jc-1-1a2bb.firebaseapp.com",

  projectId: "jc-1-1a2bb",

  storageBucket: "jc-1-1a2bb.appspot.com",

  messagingSenderId: "813684989963",

  appId: "1:813684989963:web:302a869979194216ec670e",

  measurementId: "G-N3L8LXFMJX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//type the auth and firestore functions
const auth = getAuth();
const firestore = getFirestore(app);
const performance = getPerformance(app);
const storage = getStorage(app);

export { analytics, auth, firestore, performance, storage };
