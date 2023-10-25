import { useState } from "react";
import { UseUserAuth } from "../context/FirebaseContext";

function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [box, setBox] = useState(true);
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
    <div className=" block mx-auto mt-10 max-w-md p-4 bg-gray-200 border rounded ">
      <div className="Signup-container ">
        <input
          id="mail"
          className="input text-center "
          type="email"
          placeholder="E-Mail"
          onChange={handleMail}
        ></input>
        <br />
        <input
          id="pw"
          className="input text-center mt-4 w-auto"
          type="password"
          placeholder="Passwort"
          onChange={handlePW}
        ></input>
      </div>
      <button
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => signc}
      >
        Continue
      </button>
      <br />
      <button onClick={signUpwithGoogle} className="text-center">
        {" "}
        SIgn in with Google
      </button>
      <p>
        Login{" "}
        <a className="text-blue-600" href="/">
          Click here!
        </a>
      </p>
      <div className="signup-agree">
        <input
          className=""
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            setBox(!box);
          }}
        ></input>
        <p className="">I Agrre to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default Signup;
