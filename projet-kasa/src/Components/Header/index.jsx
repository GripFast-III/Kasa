import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './../../Assets/LOGO.png';

const Header = () => {
    return (
        <header className="header" role="banner">
            <Link to="/">
                <img className="header__logo" src={logo} alt="logo" />
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