import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
    </>
  );
}

export default App;