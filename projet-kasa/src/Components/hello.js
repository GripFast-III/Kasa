import React from "react";
import logoKasa from "./../Assets/LOGO.png";

const Hello = () => {
  return (
    <div className="up">
      <div className="imglogo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>
      <div className="navigation">
        <nav>
          <a href="/">Accueil</a>
          <a href="/">À propos</a>
        </nav>
      </div>
    </div>
  );
};

export default Hello;
