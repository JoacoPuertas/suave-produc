import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaEnvelope, FaYoutube, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer({ sections = [] }) {  // Agregar valor por defecto para sections
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="justify-content-center text-center">
          {/* Título SUAVE */}
          <Col xs={12} className="mb-3 mb-lg-4">
            <h2 className="footer-title fs-1">Suave</h2>
          </Col>

          {/* Secciones */}
          <Col xs={12} className="mb-3 mb-lg-4">
            <Nav className="justify-content-center">
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <Nav.Link key={index} href={section.link} className="footer-link">
                    {section.name}
                  </Nav.Link>
                ))
              ) : (
                <p>No sections available</p>
              )}
            </Nav>
          </Col>

          {/* Iconos */}
          <Col xs={12} className="mb-3 mb-lg-4">
            <Nav className="justify-content-center">
              <Nav.Link href="#email" className="social-icon"><FaEnvelope size={25}/></Nav.Link>
              <Nav.Link href="#youtube" className="social-icon"><FaYoutube size={25}/></Nav.Link>
              <Nav.Link href="#instagram" className="social-icon"><FaInstagram size={25}/></Nav.Link>
              <Nav.Link href="#tiktok" className="social-icon"><FaTiktok size={25}/></Nav.Link>
              <Nav.Link href="#whatsapp" className="social-icon"><FaWhatsapp size={25} /></Nav.Link>
            </Nav>
          </Col>

          {/* Copyright */}
          <Col xs={12}>
            <p className="copyright">Suave 2024 &copy; Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
