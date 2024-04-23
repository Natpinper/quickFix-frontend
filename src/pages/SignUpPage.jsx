import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function SignUpPage() {
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
    e.preventDefault()

    const requestBody = {email, password, name, location}

    axios.post(`${API_URL}/auth/signup`, requestBody)
    .then((response)=>{
        navigate('/login')
    })
    .catch((error)=>{
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
    })
  };

  return (
    <div className="SignUpPageContainer">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
       
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignUpPage;
