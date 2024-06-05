/*import React, { useEffect } from 'react';
import Gallery from './../../Components/Gallery';
import Banner from './../../Components/Banner';

function Home() {
useEffect(() => {
        window.scrollTo(0, 0);
}, []);

return (
    <React.Fragment>
        <Banner title={`Chez vous, /n partour et ailleurs`} page="home" />
        <section className="home__housing">
            <Gallery page="home" />
        </section>
    </React.Fragment>
    );
}

export default Home;
*/

import React from "react";
import Banner from "./../../Components/Banner";

const Home = () => {
  return (
    <div className="bannerHome">
      <Banner
        className="bannerTitleHome"
        title={`Chez vous, partout et ailleurs`}
        page="home"
      />
    </div>
  );
};

export default Home;
