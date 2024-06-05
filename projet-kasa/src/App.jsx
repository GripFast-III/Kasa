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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './Styles/main.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";
import About from "./Pages/About";
//import Housing from "./Pages/Housing";
import Error from "./Pages/Error";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/housing/:housingId" element={<Housing />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
