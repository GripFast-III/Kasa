import React from "react";

const Banner = ({ title, page }) => {
  const titleWithBreak = title.replace(
    ",",
    '<span className="mobile-break">,</span>'
  );

  return (
    <div className={`overlay banner ${page}__banner`}>
      {title && (
        <h1
          className="banner__title"
          dangerouslySetInnerHTML={{ __html: titleWithBreak }}
        ></h1>
      )}
    </div>
  );
};

export default Banner;
