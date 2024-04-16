import React from "react";
import "../styles/Footer.css"




function Footer() {

  return (
    <footer>
    <div className="social-media-container">
      <img className="social-media-icon" src="./images/facebook.png" alt="Facebook" />
      <img className="social-media-icon" src="./images/instagram.png" alt="Instagram" />
      <img className="social-media-icon" src="./images/whatsapp.png" alt="Whatsapp" />
    </div>
    <p>Natalia Pinto</p>
    <p>WD IRONHACK 2024</p>
    </footer>
  );
}

export default Footer;
