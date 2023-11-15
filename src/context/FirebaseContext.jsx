import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../features/config/firebase";
import { useNavigate } from "react-router-dom";

const UserAuthContext = createContext(null);

const actionCodeSettings = {
  // Replace with your actual app's URL
  url: "http://localhost:5173/login/v",
  handleCodeInApp: true,
};

function FirebaseContext(props) {
  const navigate = useNavigate();
  const { children } = props;
  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const signUp = async (email) => {
    try {
      // Use the sendSignInLinkToEmail method
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      console.log("Sign-in link sent successfully");
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle error, display a message, or log it
      console.error("Error sending sign-in link:", errorCode, errorMessage);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        navigate("/JC-Website");
        setIsAuth(true);
      } else {
        // Redirect to a page indicating email not verified
        navigate("/login");
      }
      console.log("not registered");
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
    }
  };

  const Logout = async () => {
    // Sign out user if authenticated
    console.log("Logging out user");

    try {
      await signOut(auth);

      // Clear state
      setIsAuth(false);
      setUser2("");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const signUpwithGoogle = async () => {
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
      console.error("Google authentication error:", err);
    }
  };

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
