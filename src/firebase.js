import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLORplzD-PiEiHw1ggAaxt8ZENY7l80lg",

  authDomain: "jc-deploy.firebaseapp.com",

  projectId: "jc-deploy",

  storageBucket: "jc-deploy.appspot.com",

  messagingSenderId: "580533446391",

  appId: "1:580533446391:web:4e16b755d3b4f1f9cc55f2",

  measurementId: "G-HSKVTP6DMZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//type the auth and firestore functions
const auth = getAuth();
const firestore = getFirestore(app);
const performance = getPerformance(app);
const storage = getStorage(app);

export { analytics, auth, firestore, performance, storage };
