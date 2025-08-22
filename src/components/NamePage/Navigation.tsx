import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import ProfilePic from "./ProfilePic";

export default function Navigation() {
  return (
    <Navbar id="nav-bar" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/#myname">
          <ProfilePic />
        </Navbar.Brand>
        <Nav id="navlinks" variant="pills" className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/#about">about</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#skills">skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#project1">projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#sayHi">say hi</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
