import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand>
            <NavLink to="/" className="navBarLink">
              <span className="brandNameSneaker">Sneaker</span>{" "}
              <span className="brandNameCity">City</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink to="/" className="navBarLink">
                  Home
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink to="/add" className="navBarLink">
                  Add Sneaker
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <NavLink to="/checkout" className="navBarLink">
                  <Cart />
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
