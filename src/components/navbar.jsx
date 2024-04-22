import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
    return (
       <nav className="navbar"> 
       <div className="navbar-right">
       <Link to="/">
        <button><img src="./images/Mesa de trabajo 4.png" className="logo"></img></button>
      </Link>
      </div>
      <div className="navbar-left">
      <Link to="/about-us">
        <button>About Us</button>
      </Link>
      <Link to="/login">
        <button className="user-icon"><FaUserCircle></FaUserCircle></button>
      </Link>
      </div>
     
      </nav>
    )
}




export default Navbar;
