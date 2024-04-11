import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

//import { AuthContext } from "../context/auth.context";

function Navbar() {
    return (
       <nav className="navbar"> 
       <h1>Hey!</h1>
       <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about-us">
        <button>About Us</button>
      </Link>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      </nav>
    )
}


export default Navbar;
