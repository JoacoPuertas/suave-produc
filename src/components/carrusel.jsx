import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';
import './sessionsPage.css';

// Importa las imágenes
import Suave0 from '../assets/Fotos/Suave0.jpg';
import Suave1 from '../assets/Fotos/Suave1.jpg';
import Suave2 from '../assets/Fotos/Suave2.jpg';

function IndividualIntervalsExample() {
  return (
    <div className="sessions-container"> {/* Aplica el contenedor con el tamaño adecuado */}
      <Carousel nextIcon={<span className="custom-next-icon" />} prevIcon={<span className="custom-prev-icon" />}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src={Suave0}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block"
            src={Suave1}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={Suave2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
