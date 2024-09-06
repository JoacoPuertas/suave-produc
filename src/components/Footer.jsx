import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaEnvelope, FaYoutube, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer({ sections }) {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="justify-content-center text-center">
          {/* Título SUAVE */}
          <Col xs={12} className="mb-3">
            <h2 className="footer-title">Suave</h2>
          </Col>

          {/* Secciones */}
          <Col xs={12} className="mb-3">
            <Nav className="justify-content-center">
              {sections.map((section, index) => (
                <Nav.Link key={index} href={section.link} className="footer-link">
                  {section.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Iconos */}
          <Col xs={12} className="mb-3">
            <Nav className="justify-content-center">
              <Nav.Link href="#email" className="social-icon"><FaEnvelope /></Nav.Link>
              <Nav.Link href="#youtube" className="social-icon"><FaYoutube /></Nav.Link>
              <Nav.Link href="#instagram" className="social-icon"><FaInstagram /></Nav.Link>
              <Nav.Link href="#tiktok" className="social-icon"><FaTiktok /></Nav.Link>
              <Nav.Link href="#whatsapp" className="social-icon"><FaWhatsapp /></Nav.Link>
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
