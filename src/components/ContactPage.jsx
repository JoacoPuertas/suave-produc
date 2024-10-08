import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactPage.css';

function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="contact-title">Get in touch with us</h2>
            <p className="contact-description">
            Here you can find all the information to get in contact with our production company.
            </p>
          </Col>
        </Row>
        <Row className="contact-info mt-5">
          <Col md={4} className="contact-item text-center my-1 my-lg-0">
            <div className="contact-icon address-icon"></div>
            <h5>Address</h5>
            <p>547 Calle pepito, Puntarenas, Costa Rica</p>
          </Col>
          <Col md={4} className="contact-item text-center my-1 my-lg-0">
            <div className="contact-icon email-icon"></div>
            <h5>Email</h5>
            <p>suaveproduction@productora.com</p>
          </Col>
          <Col md={4} className="contact-item text-center my-1 my-lg-0">
            <div className="contact-icon phone-icon"></div>
            <h5>Phone</h5>
            <p>33885315145</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
