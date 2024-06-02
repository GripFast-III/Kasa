import React from "react";
import Logo from "./../../Assets/_Section 1.png";

/*
const Banner = ({ title, page }) => {
    return (
        <div className={`banner ${page}__banner`}>
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    );
};

export default Banner;
*/

const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerImg">
        <img src={Logo} alt="Inviation à cliquer sur un logement"></img>
      </div>
    </section>
  );
};

export default Banner;
