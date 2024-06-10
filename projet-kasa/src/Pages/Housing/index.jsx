import React from "react";
import Banner from "../../Components/Banner";

const housing = () => {
  <>
    {
      <div className="bannerAbout">
        <Banner page="About" />
      </div>
    }
    <section className="houses">
      <div className="housingContainer">
        <div className="carousel"></div>
      </div>
    </section>
  </>;
};

export default housing;
