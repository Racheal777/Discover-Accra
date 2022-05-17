import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";
import "../css/nav.css";

export default function Navbarr() {
  return (
    <div>
      <nav className="sticky">
        <Navbar expand="lg" sticky="top" className="navy">
          <Container fluid>
            <div className="logos">
              <Nav.Link href="/">Discover</Nav.Link>
              
            </div>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 justify-content-center navv"
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <NavDropdown title="Locations" id="navbarScrollingDropdown" className="dropdown">
                  <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Restaurants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/beaches">Beach</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Garden</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Adventure</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav>

              <div className="register">
                <Nav.Link href="/">Signup</Nav.Link>
                <button>
                  <Nav.Link href="/">Login</Nav.Link>
                </button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}
