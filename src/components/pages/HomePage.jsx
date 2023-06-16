import React from "react";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <ProductCard />
    </div>
  );
};

export default HomePage;
