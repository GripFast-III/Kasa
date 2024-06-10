import React from "react";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";

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
    <Footer />
  </>;
};

export default housing;
