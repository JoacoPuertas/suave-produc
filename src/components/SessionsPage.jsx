import React from 'react';
import './SessionsPage.css';
import CustomCarousel from './carrusel';
import Suave0 from '../assets/Fotos/Suave0.jpg';
import Suave1 from '../assets/Fotos/Suave1.jpg';
import Suave2 from '../assets/Fotos/Suave2.jpg';
import Suave3 from '../assets/Fotos/Suave3.jpg';
import Suave4 from '../assets/Fotos/Suave4.jpg';
import Suave5 from '../assets/Fotos/Suave5.jpg';

function Sessions() {
  const images1 = [Suave0, Suave1, Suave2];
  const images2 = [Suave3, Suave4, Suave5];

  return (
    <div className="sessions-container p-4">
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <CustomCarousel images={images1} interval={2500} />
        </div>
        <div className="col-12 col-lg-6">
          <CustomCarousel images={images2} interval={3800} />
        </div>
      </div>
    </div>
  );
}

export default Sessions;
