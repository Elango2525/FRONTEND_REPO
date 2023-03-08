import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Ela.css'
function Ela() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <h1>Login here!</h1>
        <div className="boxi">
         
    <form onSubmit={handleSubmit}>
      <br></br>
      <label id="h">
        Username:  
      </label>
      <br></br>
      <br></br>
        <input type="email" value={email} onChange={handleEmailChange} />
      <br></br>
      <br></br>
     
      <label id="h">
        Password:
      </label>
      <br></br>
      <br></br>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br></br><br></br>
      <br></br>
      <br></br>
      <a><Link to="Main">
      <button id="bi" type="submit">Login</button>
      </Link></a>
      <br></br>
      <br></br><br></br>
      <label id="fo"><a href="www.skcet.ac.in">Forgot Password?</a></label>
      <label id="or"><h2>Or</h2></label>
      <button id="bb" type="submit"><a id="a1" href="https://accounts.google.com/v3/signin/identifier?dsh=S1543694925%3A1678110723476925&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">Login with google</a></button>
      <br></br>
      <br></br>
      <br></br>
      <a><Link to="signup">
      <label id="sp">Signup</label>
      </Link></a>
   
    </form>

    </div>
    </div>
  );
}

export default Ela;