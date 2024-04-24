import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import authService from "../services/auth.service";
import "../styles/SignupPage.css"
import "../styles/LoginPage.css"

const API_URL = "http://localhost:5005";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { email, password, name, location };

    authService.signup(newUser)
      .then((createdUser) => {
        navigate("/login");
        console.log(createdUser);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupContainer">
      <h1 className="form-title">Sign Up</h1>

      <form className="Login-Form" onSubmit={handleSignup}>
        <label>Email:</label>
        <input
          required={true}
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label>Password:</label>
        <input
          required={true}
          minLength={6}
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input
          required={true}
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />

        <label>Location:</label>
        <input
          required={true}
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />
      </form>
      <button className="signup-button" type="submit">Sign Up</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link className="link-signup" to={"/login"}> Login</Link>
    </div>
  );
}

export default SignUpPage;
