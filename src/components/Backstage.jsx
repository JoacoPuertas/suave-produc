import React, { useState, useEffect } from 'react';
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

function Backstage({ photos }) {
  const [photoCount, setPhotoCount] = useState(4);

  useEffect(() => {
    // Función que ajusta el número de fotos según el ancho de la pantalla
    const updatePhotoCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setPhotoCount(4); // Muestra 4 fotos en mobile
      } else if (screenWidth <= 1024) {
        setPhotoCount(6); // Muestra 6 fotos en tablet
      } else {
        setPhotoCount(9); // Muestra 9 fotos en desktop
      }
    };

    // Llamamos a la función al cargar la página y al redimensionar
    updatePhotoCount();
    window.addEventListener('resize', updatePhotoCount);

    // Limpieza del event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', updatePhotoCount);
  }, []);

  const selectedPhotos = photos.slice(0, photoCount);

  return (
    <section className='backstage p-3'>
      <h2 className='text-center mb-4'>Backstage</h2>
      <div className="container gallery-grid">
        {selectedPhotos.map((photo, index) => (
          <div key={index} className={`gallery-item gallery-item-${index}`} style={{ backgroundImage: `url(${photo})` }}>
          </div>
        ))}
      </div>
    </section>
  );
}

// Exportamos el array de fotos para que el componente principal lo utilice
const photos = [Suave0, Suave1, Suave2, Suave3, Suave4, Suave5, Suave6, Suave7, Suave8];
export { photos };

export default Backstage;
