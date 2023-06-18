import React from "react";
import Navbar from "./components/header/Navbar";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
