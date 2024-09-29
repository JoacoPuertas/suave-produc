import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';

function CustomCarousel({ images, interval }) {
  return (
    <Carousel indicators={false} nextIcon={<span className="custom-next-icon" />} prevIcon={<span className="custom-prev-icon" />} interval={interval}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block custom-carousel-image"
            src={image}
            alt={`Slide ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
