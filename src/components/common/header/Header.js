import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import Logo from "../../../assets/img/mini-cart.png";
import Cart from "../cart/Cart";
import "./Header.scss";

const Header = ({ products }) => (
  <>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="mc-navbar"
    >
      <Container className="mc-header-container">
        <Navbar.Brand to="/">
          <Image src={Logo} alt="Mini Cart Logo"></Image>
        </Navbar.Brand>
        <Cart products={products} mobileView={"true"} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact="true" to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Cart products={products} webView={"true"} />
      </Container>
    </Navbar>
  </>
);

export default Header;
