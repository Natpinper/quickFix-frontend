import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/auth.context";
function Navbar() {

  const {isLoggedIn, user, logOut} = useContext(AuthContext)

    return (
       <nav className="navbar"> 
       <div className="navbar-right">
       <Link to="/">
        <button><img src="./images/Mesa de trabajo 4.png" className="logo"></img></button>
      </Link>
      </div>
      {!isLoggedIn && (
      <div className="navbar-left">
      <Link to="/about-us">
        <button>About Us</button>
      </Link> 
      <Link to="/login">
        <button className="user-icon"><FaUserCircle></FaUserCircle></button>
      </Link>
      </div>
    )}
    {isLoggedIn && (
      <div className="navbar-left">
      <Link to="/profile">
      <button>My Profile</button>
      </Link>
      <button onClick={logOut} className="user-logout">Logout</button>
      <span>{user && user.name}</span>
      </div>
    )}
     
      </nav>
    )
}




export default Navbar;
