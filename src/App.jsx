import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Review from "./components/Review";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
