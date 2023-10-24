import { useContext } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
const UserAuthContext = createContext();
function FirebaseContext({ children }) {
  const [user,setUser] = useState("")
  function signUp(email, password){
    return createUserWithEmailAndPassword(auth,email, password)
  }
  function login(email, password){
    return signInWithEmailAndPassword(auth,email, password)
  }
  const unsubscribe = useEffect(()=>{onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
return ()=> unsubscribe()},[])
  return{
      <UserAuthContext.Provider value={}>{children}</UserAuthContext.Provider>

  }
}
function useUserAuth(){
  return useContext(UserAuthContext)
} 
export { FirebaseContext, useUserAuth };
