import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { useContext } from "react";

function Navbar() {
    return (
       <nav className="navbar"> 
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
