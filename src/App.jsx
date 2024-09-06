import React from 'react';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import Backstage from './components/Backstage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Imágenes importadas
import Suave0 from './assets/Fotos/Suave0.jpg';
import Suave1 from './assets/Fotos/Suave1.jpg';
import Suave2 from './assets/Fotos/Suave2.jpg';
import Suave3 from './assets/Fotos/Suave3.jpg';
import Suave4 from './assets/Fotos/Suave4.jpg';
import Suave5 from './assets/Fotos/Suave5.jpg';
import Suave6 from './assets/Fotos/Suave6.jpg';
import Suave7 from './assets/Fotos/Suave7.jpg';
import Suave8 from './assets/Fotos/Suave8.jpg';

function App() {
  const sections = [
    { name: 'Sessions', link: '#Sessions' },
    { name: 'Backstage', link: '#Backstage' },
    { name: 'About Us', link: '#About Us' },
    { name: 'Contact', link: '#Contact' },
  ];

  // Pasamos las imágenes importadas
  const photos = [
    Suave0,
    Suave1,
    Suave2,
    Suave3,
    Suave4,
    Suave5,
    Suave6,
    Suave7,
    Suave8
  ];

  return (
    <div className="App">
      <main className="main-section">
        <Navegator />
      </main>
      <section className='session p-3 '>
        <h2 className='text-center mb-3 mb-lg-4'>Sessions</h2>
        <div className="container">
          <lite-youtube videoid="710bxzd_wY"></lite-youtube>
          <p className='fs-6 fs-lg-6'>Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis, aperiam perspiciatis a consequatur porro aut mollitia odio quas, dolor eligendi repellat illo optio quod illum distinctio. Excepturi, pariatur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil nostrum ipsum commodi dignissimos quisquam nulla deserunt repellat fuga consequatur vel rem, possimus consectetur earum soluta non laborum ipsa necessitatibus.</p>
        </div>
      </section>

      {/* Componente Backstage con 5 fotos */}
      <Backstage photos={photos} photoCount={4} />

      <footer>
        <Footer sections={sections} />
      </footer>
    </div>
  );
}

export default App;
