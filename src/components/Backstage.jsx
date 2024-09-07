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

function Backstage() {
  return (
    <Container fluid className="backstage p-3">
      <h2 className='text-center mb-4'>Backstage</h2>
      <Row> 
        {/* Imagen principal que ocupa dos filas */}
        <Col xs={12} md={4} className="gallery-item gallery-item-large" style={{ backgroundImage: `url(${Suave0})` }}></Col>

        {/* Columna que contiene las dos imágenes a la derecha de la principal */}
        <Col xs={12} md={4}>
          <Row>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave1})` }}></Col>
            <Col xs={6} className="gallery-item gallery-item-half" style={{ backgroundImage: `url(${Suave2})` }}></Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="gallery-item gallery-item-large" style={{ backgroundImage: `url(${Suave3})` }}></Col>
      </Row>
      {/* Poner solo cuando estan en desktop => */}
      {/* <Row>
        <Col xs={6} md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave4})` }}></Col>
        <Col xs={6} md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave5})` }}></Col>
        <Col xs={6} md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave6})` }}></Col>
        <Col xs={6} md={3} className="gallery-item" style={{ backgroundImage: `url(${Suave7})` }}></Col>
      </Row> */}
    </Container>
  );
}

export default Backstage;
