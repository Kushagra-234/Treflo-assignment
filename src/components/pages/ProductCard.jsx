import React from "react";
import ProductSingle from "./ProductSingle";

const ProductCard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <ProductSingle />
        <ProductSingle />
        <ProductSingle />
        <ProductSingle />
        <ProductSingle />
        <ProductSingle />
      </div>
    </div>
  );
};

export default ProductCard;
