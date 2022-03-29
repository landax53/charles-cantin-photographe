import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Galery from "../../pages/Galery";
import Home from "../../pages/Home";
import PricesPresta from "../../pages/PricesPresta";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/galerie" exact element={<Galery />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/tarifs-prestations" exact element={<PricesPresta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
