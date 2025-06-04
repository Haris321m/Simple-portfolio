import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Work from "./Components/Pages/Home/Sections/Projects/Projects";
import About from "./Components/Pages/Home/Sections/About/About";
import Contact from "./Components/Pages/Home/Sections/Contact/Contact";

function App() {
  return (
    <div className="bg-[#05051e] text-white overflow-hidden">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
