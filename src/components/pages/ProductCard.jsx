import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import ProductSingle from "./ProductSingle";
import VegSingleProduct from "./VegSIngleProduct";
import NonVegSingleProduct from "./NonVegSingleProduct";

const ProductCard = () => {
  const [show, setShow] = useState(true);
  const [veg, setShowVeg] = useState(true);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <MDBBtn
            onClick={() => {
              setShow(false);
              setShowVeg(true);
            }}
            className="mt-2 me-4"
          >
            Vegiterian
          </MDBBtn>
          <MDBBtn
            onClick={() => {
              setShow(false);
              setShowVeg(false);
            }}
            className="mt-2"
          >
            Non-Vegiterian
          </MDBBtn>
        </div>
        {show ? (
          <ProductSingle />
        ) : (
          <>{veg ? <VegSingleProduct /> : <NonVegSingleProduct />}</>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
