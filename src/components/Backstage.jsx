import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Backstage.css';

// Importamos las imágenes
import Suave0 from '../assets/Fotos/Suave0.jpg';
import Suave1 from '../assets/Fotos/Suave1.jpg';
import Suave2 from '../assets/Fotos/Suave2.jpg';
import Suave3 from '../assets/Fotos/Suave3.jpg';
import Suave4 from '../assets/Fotos/Suave4.jpg';
import Suave5 from '../assets/Fotos/Suave5.jpg';
import Suave6 from '../assets/Fotos/Suave6.jpg';
import Suave7 from '../assets/Fotos/Suave7.jpg';
import Suave8 from '../assets/Fotos/Suave8.jpg';
import Suave9 from '../assets/Fotos/Suave9.jpg';

function Backstage() {
  return (
    <Container fluid className="backstage p-3">
      <h2 className='text-center mb-5'><b>Backstage</b></h2>
      
      {/* Primer fila en mobile */}
      <Row className='d-flex'> 
        <Col xs={12} md={4} className="gallery-item gallery-item-large" style={{ backgroundImage: `url(${Suave0})` }}></Col>

        {/* Columna que contiene las dos imágenes pequeñas */}
        <Col className='midCol' xs={12} md={4}>
          <Row className='midrow container-fluid'>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave1})` }}></Col>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave2})` }}></Col>
          </Row>
          <Row className='midrow container-fluid d-none d-md-flex'>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave8})` }}></Col>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave9})` }}></Col>
          </Row>
        </Col>

        <Col xs={12} md={4} className="gallery-item gallery-item-large" style={{ backgroundImage: `url(${Suave3})` }}></Col>
      </Row>

      {/* Segunda fila solo para pantallas grandes */}
      <Row className="d-none d-md-flex">
        <Col md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave4})` }}></Col>
        <Col md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave5})` }}></Col>
        <Col md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave6})` }}></Col>
        <Col md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave7})` }}></Col>
      </Row>
    </Container>
  );
}

export default Backstage;
