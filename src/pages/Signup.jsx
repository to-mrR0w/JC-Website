import { useState } from "react";
import { UseUserAuth } from "../context/FirebaseContext";

function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, signUpwithGoogle } = UseUserAuth();

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  async function signc() {
    try {
      await signUp(mail, password);
    } catch (error) {
      console.log(error);
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
      <br />
      <button onClick={signUpwithGoogle}> SIgn in with Google</button>
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
