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
      <div className="navbar-left">
        <Link to="/">
          <button>
            <img
              src="https://res.cloudinary.com/dvtmccjmf/image/upload/v1715202629/movie-gallery/ooknxf0lie1byqo0o9jo.png"
              alt="logopic"
              className="logo"
            ></img>
          </button>
        </Link>
        <Link to="/" className="site-name">
          QuickFix
        </Link>
      </div>
      {!isLoggedIn && (
        <div className="navbar-right">
          <Link to="/about-us" className="link">
            <button className="about-us">About us</button>
          </Link>
          <Link to="/login" className="link">
            <button className="user-icon">
              <FaUserCircle></FaUserCircle>
            </button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="navbar-right">
          <Link to="/about-us" className="link">
            <button className="about-us">About us</button>
          </Link>
          <Link to={`/user/${user._id}/profile`} className="link">
            <button className="my-profile-button">My Profile</button>
          </Link>
          <button onClick={logOut} className="user-logout">
            <Link to="/" className="link">
              <FaSignOutAlt className="sign-out-icon"></FaSignOutAlt>
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
