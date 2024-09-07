import React, { useEffect } from 'react';
import '@justinribeiro/lite-youtube'; // Asegúrate de importar el paquete
import Ratio from 'react-bootstrap/Ratio';

const LiteYouTubeEmbed = ({ videoId }) => {
  useEffect(() => {
    // Registrar el componente si aún no está registrado
    if (window.customElements.get('lite-youtube') === undefined) {
      import('@justinribeiro/lite-youtube');
    }
  }, []);

  return (
    <div style={{ margin: 'auto', width: '80%', maxWidth: '800px' }}>
      <Ratio aspectRatio="4x3">
        <lite-youtube
          videoid={videoId}
          style={{
            width: '100%',
            height: '100%',
          }}
        ></lite-youtube>
      </Ratio>
    </div>
  );
};

export default LiteYouTubeEmbed;
