import React from "react";
import Footerlogo from "./../../Assets/Size=Desktop.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="footer__logo" src={Footerlogo} alt="logo footer" />
      </div>
    </footer>
  );
};

export default Footer;
