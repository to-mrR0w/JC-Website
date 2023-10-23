import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Signup() {
  const [text, setText] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  async function signc() {
    if (
      text !== null ||
      mail !== null ||
      password !== null ||
      text !== "" ||
      mail !== "" ||
      password !== "" ||
      password.trim().lenght() !== 0 ||
      text.trim().lenght() !== 0 ||
      mail.trim().lenght() !== 0
    ) {
      await createUserWithEmailAndPassword(auth, mail, password);
    }
  }
  return (
    <div>
      <div className="Signup-container">
        <input
          id="text"
          className="input"
          type="text"
          placeholder="Your Name"
          onChange={handleText}
        ></input>
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
