import React from 'react';
import './BackstagePage.css';

// Importar las imágenes
import img1 from '../assets/Fotos/Suave0.jpg';
import img2 from '../assets/Fotos/Suave1.jpg';
import img3 from '../assets/Fotos/Suave2.jpg';
import img4 from '../assets/Fotos/Suave3.jpg';
import img5 from '../assets/Fotos/Suave4.jpg';
import img6 from '../assets/Fotos/Suave5.jpg';
import img7 from '../assets/Fotos/Suave6.jpg';
import img8 from '../assets/Fotos/Suave7.jpg';

function BackstagePage() {
  return (
    <div className="backstage-grid px-lg-5 py-5">
      <div className="grid-item"><img src={img1} alt="Imagen 1" /></div>
      <div className="grid-item"><img src={img2} alt="Imagen 2" /></div>
      <div className="grid-item"><img src={img3} alt="Imagen 3" /></div>
      <div className="grid-item"><img src={img4} alt="Imagen 4" /></div>
      <div className="grid-item"><img src={img5} alt="Imagen 5" /></div>
      <div className="grid-item"><img src={img6} alt="Imagen 6" /></div>
      <div className="grid-item"><img src={img7} alt="Imagen 7" /></div>
      <div className="grid-item"><img src={img8} alt="Imagen 8" /></div>
    </div>
  );
}

export default BackstagePage;
