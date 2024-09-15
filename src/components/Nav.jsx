import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; 

function Navegator() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.querySelector('main'); 
      const mainOffset = mainSection.offsetTop; 
      const scrollPos = window.scrollY;
      const triggerOffset = mainOffset + window.innerHeight; 

      if (scrollPos >= triggerOffset) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`px-4 py-3 ${isFixed ? 'custom-navbar fixed-top' : 'custom-navbar'}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="title-nav fs-1">Suave</Navbar.Brand> {/* Cambia href por as={Link} y to */}
        <Navbar.Toggle className='color-black' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links fs-6">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Cambia href por as={Link} y to */}
            <Nav.Link as={Link} to="/sessions">Sessions</Nav.Link> {/* Navegación a Sessions */}
            <Nav.Link as={Link} to="/backstage">Backstage</Nav.Link> {/* Navegación a Backstage */}
            <Nav.Link as={Link} to="/about">About Us</Nav.Link> {/* Navegación a About Us */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Navegación a Contact */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegator;
