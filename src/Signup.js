import React, { useState } from "react";
import './Signup.css'
import {Link} from 'react-router-dom'
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <h1>Sign-up here!</h1>
        <div className="box">
         
    <form onSubmit={handleSubmit}>
      <br></br>
      <label id="h">
        Id:
      </label>
      <br></br>
      <br></br>
        <input type="text" />
        <br></br><br></br>
      <br></br>
      <label id="h">
        Name:  
      </label>
      <br></br>
      <br></br>
      
      
        <input type="text"  />
      <label id="h"><br></br>
        Email:  
      </label>
      <br></br>
      <br></br>
        <input type="email" value={email} onChange={handleEmailChange} />
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br><br></br>
      
      <label id="h">
        Create Password:
      </label>
      <br></br>
      <br></br>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br></br><br></br>
      <br></br>
      <br></br>
      <label id="h">
        Phone No:
      </label>
      <br></br>
      <br></br>
        <input type="text" />
        <br></br><br></br>
      <br></br>
      <br></br>
      <a><Link to="Ela">
      <button id="b" type="submit">Sign-up</button><br></br><br></br>
      </Link></a>
      </form>
    </div>
    </div>
  );
}

export default Signup;