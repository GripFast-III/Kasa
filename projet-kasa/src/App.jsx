/*import React from "react"
//import Hello from "./Components/hello";
import Header from "./Components/Header";
import Banner from "./Components/Banner/banner";
import Gallery from "./Components/Gallery/index"
import Footer from "./Components/Footer/footer";

import "./Styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './Styles/main.scss';
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";
import Gallery from "./Components/Gallery";
import About from "./Pages/About";
import Housing from "./Pages/Housing";
import Error from "./Pages/Error";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Changez la durée selon vos besoins

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:housingId" element={<Housing />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
