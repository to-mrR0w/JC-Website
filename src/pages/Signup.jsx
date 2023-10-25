import { useState } from "react";
import { UseUserAuth } from "../context/FirebaseContext";
import { GoogleLogo } from "phosphor-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "react-bootstrap/Alert";
function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [box, setBox] = useState(true);
  const [error, setError] = useState("");
  const { signUp, signUpwithGoogle } = UseUserAuth();
  const locate = useLocation();
  const navigate = useNavigate();

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  async function signc(e) {
    e.preventDefault();
    setError("");
    if (box) {
      try {
        console.log("in box");
        await signUp(mail, password);
        navigate("/JC-Website/");
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <div className=" block mx-auto mt-10 max-w-md p-4 bg-gray-200 border rounded ">
      <div className="Signup-container ">
        <h1 className="text-center text-3xl">
          <b>{"SignUp"}</b>
        </h1>
        {error.length > 0 && (
          <Alert className="text-center my-2" key={"Danger"} variant="danger">
            {error}
          </Alert>
        )}

        <Input
          id="mail"
          className="input text-center "
          type="email"
          placeholder="E-Mail"
          onChange={handleMail}
        />

        <br />
        <Input
          id="pw"
          className="input text-center mt-4 w-auto"
          type="password"
          placeholder="Passwort"
          onChange={handlePW}
        />
      </div>
      <Button
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={signc}
      >
        Sign up
      </Button>

      <br />
      <Button
        onClick={signUpwithGoogle}
        className="text-center flex gap-5 mx-auto"
      >
        <GoogleLogo /> Sign in with Google
      </Button>
      <div className="flex gap-1 mx-auto">
        <p className="gap-1">
          {locate.pathname.includes("login") ? "Register" : "Login"}
          <Link
            className="text-blue-600"
            to={
              locate.pathname.includes("login")
                ? "/JC-Website/register"
                : "/JC-Website/login"
            }
          >
            Click here!
          </Link>
        </p>
      </div>
      <div className="signup-agree">
        <Input
          type="checkbox"
          id="checkbox"
          onChange={() => {
            setBox(!box);
          }}
        ></Input>
        <p className="">I Agrre to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default Signup;
