import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnF9zd51tuKsRqPOce62NonL3-ENwuEm4",

  authDomain: "juniorcompany-3d32e.firebaseapp.com",

  projectId: "juniorcompany-3d32e",

  storageBucket: "juniorcompany-3d32e.appspot.com",

  messagingSenderId: "491429369776",

  appId: "1:491429369776:web:824d1f078c9abab01ca875",

  measurementId: "G-64MEMJQ51H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//type the auth and firestore functions
const auth = getAuth();
const firestore = getFirestore(app);
const performance = getPerformance(app);
const storage = getStorage(app);

export { analytics, auth, firestore, performance, storage };
