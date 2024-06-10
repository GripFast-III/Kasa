import React from "react";

const Banner = ({ title, page }) => {
  return (
    <div className={`overlay banner ${page}__banner`}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
