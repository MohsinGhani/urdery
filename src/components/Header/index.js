import React from "react";
import MainLogo from "../../assets/images/main-logo.png";
import Button from "../../common/Button";
import LayoutWrapper from "../../common/LayoutWrapper";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <LayoutWrapper>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={MainLogo} alt="main-logo" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-left-links">
              <NavLink
                to="/features"
                activeClassName="active-navlink"
                className="nav-text"
              >
                Features
              </NavLink>

              <NavLink
                to="/pricing"
                activeClassName="active-navlink"
                className="nav-text"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/support"
                activeClassName="active-navlink"
                className="nav-text"
              >
                Support
              </NavLink>
            </div>
            <div className="nav-right-links">
              <NavLink
                to="/sign-in"
                activeClassName="active-navlink"
                className="nav-text"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                activeClassName="active-navlink"
                className="nav-text"
              >
                Sign Up
              </NavLink>
              <Button btnText="Get Started" className="secondary" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </LayoutWrapper>
  );
};

export default Header;
