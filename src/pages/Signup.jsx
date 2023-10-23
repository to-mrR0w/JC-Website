function Signup() {
  return (
    <div>
      <div className="Signup-container">
        <input className="input" type="text" placeholder="Your Name"></input>
        <input className="input" type="email" placeholder="E-Mail"></input>
        <input className="input" type="password" placeholder="Passwort"></input>
      </div>
      <button>Continue</button>
      <p>Login</p>
      <div className="signup-agree">
        <input className="" type="checkbox" name="" id=""></input>
        <p>I Agrre to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default Signup;
