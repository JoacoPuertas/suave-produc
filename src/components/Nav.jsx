import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; 

function Navegator() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar px-4 py-3">
      <Container>
        <Navbar.Brand href="#home" className="title-nav fs-1">Suave</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links fs-6">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Sessions">Sessions</Nav.Link>
            <Nav.Link href="#Backstage">Backstage</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegator;