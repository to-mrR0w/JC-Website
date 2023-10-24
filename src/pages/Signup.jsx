import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import firebase from "firebase/app";
function Signup() {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signinwithgoogle = async () => {
    const provider = new firebase.auth.GoogleProvider();
    auth.signInWithPopup(provider);
  };

  async function signc() {
    if (
      mail !== null ||
      password !== null ||
      mail !== "" ||
      password !== "" ||
      password.trim().lenght() !== 0 ||
      mail.trim().lenght() !== 0
    ) {
      console.log(1234);
      await createUserWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          // User signed up
          var user = userCredential.user;

          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div>
      <div className="Signup-container">
        <input
          id="mail"
          className="input"
          type="email"
          placeholder="E-Mail"
          onChange={handleMail}
        ></input>
        <input
          id="pw"
          className="input"
          type="password"
          placeholder="Passwort"
          onChange={handlePW}
        ></input>
      </div>
      <button onClick={() => signc}>Continue</button>
      <button onClick={() => signinwithgoogle}> SIgn in with Google</button>
      <p>
        Login{" "}
        <a className="text-blue-600" href="/">
          Click here!
        </a>
      </p>
      <div className="signup-agree">
        <input className="" type="checkbox" name="" id=""></input>
        <p>I Agrre to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default Signup;
