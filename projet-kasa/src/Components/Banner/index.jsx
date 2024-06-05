import React from "react";

const Banner = ({ title, page }) => {
  return (
    <div className={`banner ${page}__banner`}>
      {title && (
        <div className="banner__overlay">
          <h1 className="banner__title">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
