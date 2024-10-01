import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './aboutUsPage.css';
import img1 from '../assets/Juli.png';
import img2 from '../assets/Juli2.jpg';

function AboutUs() {
  return (
    <div className="about-section">
      {/* Fondo con texto */}
      <div className="about-bg">
        <div className="overlay">
          <p className="about-text">
          Suave es una productora artística que nace de la amistad y la colaboración. Creamos espacios únicos y memorables, desde la decoración de eventos hasta la creación de entornos especiales para artistas. En Suave, creemos en la autogestión y en la importancia de la suavidad en nuestras relaciones, aportando un toque de delicadeza y empatía a cada proyecto. Nuestro objetivo es construir experiencias armoniosas y auténticas que resalten la belleza de la conexión humana y la creatividad compartida.
          </p>
        </div>
      </div>

      {/* Sección con dos cards para el personal */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="team-card">
              <Card.Img variant="top" src={img1} />
              <Card.Body className='py-1 px-0'>
                <Card.Title className='py-1 px-3'>Julieta Puertas</Card.Title>
                <Card.Text className='py-1 px-3'>Prouctora - Fotografa</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="team-card">
              <Card.Img variant="top" src={img2} />
              <Card.Body className='py-1 px-0'>
                <Card.Title className='py-1 px-3'>Julieta Ventanas</Card.Title>
                <Card.Text className='py-1 px-3'>Prouctora - Fotografa</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
