import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../context/auth.context";
function Navbar() {
  const { isLoggedIn, user, logOut } = useContext(AuthContext);
  const { userId } = useParams();
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <Link to="/">
          <button>
            <img
              src="./images/Mesa de trabajo 4.png"
              alt="´logopic"
              className="logo"
            ></img>
          </button>
        </Link>
        <Link to="/" className="site-name">
          QuickFix
        </Link>
      </div>
      {!isLoggedIn && (
        <div className="navbar-left">
          <Link to="/about-us">
            <button className="about-us">About us</button>
          </Link>
          <Link to="/login">
            <button className="user-icon">
              <FaUserCircle></FaUserCircle>
            </button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="navbar-left">
          <Link to="/about-us">
            <button className="about-us">About us</button>
          </Link>
          <Link to={`/user/${user._id}/profile`}>
            <button className="my-profile-button">My Profile</button>
          </Link>
          <button onClick={logOut} className="user-logout">
            <Link to="/">
              <FaSignOutAlt className="sign-out-icon"></FaSignOutAlt>
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
