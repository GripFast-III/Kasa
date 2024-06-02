/*import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoKasa from './../../Assets/LOGO.png';

const Header = () => {
    return (
        <header className="header" role="banner">
            <Link to="/">
                <img className="header__logo" src={logoKasa} alt="logo" />
            </Link>
            <nav className="header__nav">
                <NavLink to="/" className="header__link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="header__link">
                    À propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
*/

import React from "react";
import logoKasa from "./../../Assets/LOGO.png";

const Header = () => {
  return (
    <header>
      <div className="imglogo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>
      <div className="navigation">
        <nav>
          <a href="/">Accueil</a>
          <a href="/">À propos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;