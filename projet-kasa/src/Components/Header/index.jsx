import React from "react";
import { NavLink } from "react-router-dom";
import logoKasa from "./../../Assets/LOGO.png";

const Header = () => {
  return (
    <header className="up">
      <div className="imglogo">
        <a href="https://kasa-jp.netlify.app/">
          <img src={logoKasa} alt="Logo Kasa" />
        </a>
      </div>
      <div className="navigation">
        <nav className="header__nav">
          <NavLink to="/" activeclassname="active" className="header__link">
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="active"
            className="header__link"
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
