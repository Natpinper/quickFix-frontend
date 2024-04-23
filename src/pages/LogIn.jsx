import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";
function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {};

  return (
    <div className="LoginPageContainer">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Email:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p className="error-messag">{errorMessage}</p>}

      <p>Don´t have an account yet?</p>
      <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
}

export default LogIn;
