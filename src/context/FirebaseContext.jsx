import { useContext } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const UserAuthContext = createContext(null);
function FirebaseContext(props) {
  const navigate = useNavigate();
  const { children } = props;
  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const Logout = async () => {
    // Sign out user if authenticated
    console.log("Logging out user");

    try {
      await signOut(auth);

      // Clear state
      setIsAuth(false);
    } catch (err) {
      console.error(err);
    }
  };
  async function signUpwithGoogle() {
    console.log("Authenticating user");

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser2(user);
      // Set to state
      setIsAuth(true);
      navigate("/JC-Website/");
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserAuthContext.Provider
      value={{
        Logout,
        signUp,
        signOut,
        user,
        login,
        isAuth,
        signUpwithGoogle,
        user2,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
const UseUserAuth = () => {
  return useContext(UserAuthContext);
};
export { FirebaseContext, UseUserAuth };
