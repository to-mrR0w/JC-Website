import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
//type the auth and firestore functions
const auth = getAuth(app);

export { auth };
