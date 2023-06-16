import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Pizza Store</MDBNavbarBrand>
        <span>All Pizzas</span>
        <MDBBtn color="dark">Cart</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
