import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; 

function Navegator() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.querySelector('main'); // Asegúrate de que haya una sección 'main'
      const mainOffset = mainSection.offsetTop; // La distancia de la sección main desde la parte superior
      const scrollPos = window.scrollY;
      const triggerOffset = mainOffset + (window.innerHeight ); // Ajuste para cuando "casi" no se vea

      // Si el scroll es mayor que el valor ajustado, deja de estar fixed
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
        <Navbar.Brand href="#home" className="title-nav fs-1">Suave</Navbar.Brand>
        <Navbar.Toggle className='color-black' aria-controls="responsive-navbar-nav" />
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