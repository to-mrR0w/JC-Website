import { useState } from "react";
import { GoogleLogo } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "react-bootstrap/Alert";
import { UseUserAuth } from "../context/FirebaseContext";
import Header from "../components/Header";

function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, signUpwithGoogle } = UseUserAuth();
  const locate = useLocation();

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };

  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(mail, password);
      console.log("succeded?");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className=" block mx-auto mt-10 max-w-md p-4 bg-gray-200 border rounded ">
        <div className="Signup-container ">
          <h1 className="text-center text-3xl">
            <b>{"LogIn"}</b>
          </h1>
          {error.length > 0 && (
            <Alert
              className="text-center my-2 mt-2 rounded-md bg-red-100 p-2 text-xs text-red-400"
              key={"Danger"}
              variant="danger"
            >
              {error}
            </Alert>
          )}
          <div className=" block justify-items-center ">
            <Input
              id="mail"
              className="input text-center mt-4 w-full rounded-sm p-2"
              type="email"
              placeholder="E-Mail"
              onChange={handleMail}
            />

            <br />
            <Input
              id="pw"
              className="input text-center mt-4 w-full p-2 rounded-sm"
              type="password"
              placeholder="Passwort"
              onChange={handlePW}
            />
          </div>
        </div>
        <Button
          className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded cursor-pointer mt-4 w-auto"
          onClick={handleSignup}
        >
          Continue
        </Button>

        <br />
        <Button
          onClick={signUpwithGoogle}
          className="text-center flex gap-5 mx-auto"
        >
          <GoogleLogo /> Sign in with<b className="text-orange-400">Google</b>
        </Button>
        <div className="flex gap-1 mx-auto">
          <p className="gap-1.5">
            {locate.pathname.includes("login") ? "Register " : "Login "}
            <Link
              className="text-blue-600"
              to={locate.pathname.includes("login") ? "/register" : "/login"}
            >
              Click here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
