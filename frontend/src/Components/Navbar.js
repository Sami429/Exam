import { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function NavigationBar(args) {
  return (
    <div>
      <Navbar fixed="top" style={{ backgroundColor: "#F1F1F1" }}>
        <NavbarBrand href="/">Exam System</NavbarBrand>
        <Nav pills>
          <NavItem>
            <NavLink href="/login">Student Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/staff-login">Staff Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
