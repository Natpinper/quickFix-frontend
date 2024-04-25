import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import authService from "../services/auth.service";
import "../styles/SignupPage.css";
import "../styles/LoginPage.css";
import userService from "../services/User.service";



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

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name, location };

    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
        console.log(response);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupContainer">
      <h1 className="form-title">Sign Up</h1>

      <form className="Login-Form" onSubmit={handleSignupSubmit}>
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
      
      <button className="signup-button" type="submit">
        Sign Up
      </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    <div className="lowest-p">
      <p>Already have account?</p><Link className="link-signup" to={"/login"}>
      Login
    </Link>
    </div>
    </div>
  );
}

export default SignUpPage;

//authService.signup(requestBody)
