import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
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
          <Link to="/cart">Cart(0)</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
