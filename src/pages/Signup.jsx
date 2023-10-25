import { useState } from "react";
import { UseUserAuth } from "../context/FirebaseContext";
import { GoogleLogo } from "phosphor-react";
import { useLocation } from "react-router-dom";

function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [box, setBox] = useState(true);
  const { signUp, signUpwithGoogle } = UseUserAuth();
  const locate = useLocation();

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  async function signc() {
    if (box !== false) {
      try {
        await signUp(mail, password);
      } catch (error) {
        console.log(error);
      }
    } else {
      return alert("Empty Agrement-Policy");
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
      <button
        onClick={signUpwithGoogle}
        className="text-center flex gap-5 mx-auto"
      >
        <GoogleLogo /> SIgn in with Google
      </button>
      <div className="flex gap-1 mx-auto">
        <p className="gap-1">
          {locate.pathname.includes("login") ? "Register" : "Login"}
          <a
            className="text-blue-600"
            href={
              locate.pathname.includes("login")
                ? "/JC-Website/register"
                : "/JC-Website/login"
            }
          >
            Click here!
          </a>
        </p>
      </div>
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
