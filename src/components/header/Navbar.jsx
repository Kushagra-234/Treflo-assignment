import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const { totalQuantity } = useSelector((state) => state.allCart.cartreducer);
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Pizza Store</MDBNavbarBrand>
        <span
          style={{
            fontWeight: "bolder",
          }}
        >
          All Pizzas
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
