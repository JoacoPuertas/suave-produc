import React from 'react';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import Backstage from './components/Backstage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@justinribeiro/lite-youtube';

function App() {
  const sections = [
    { name: 'Sessions', link: '#Sessions' },
    { name: 'Backstage', link: '#Backstage' },
    { name: 'About Us', link: '#About Us' },
    { name: 'Contact', link: '#Contact' },
  ];

  return (
    <div className="App">
      <main className="main-section">
        <Navegator />
      </main>
      
      <section className='session px-2 py-3'>
        <h2 className='text-center mb-5 mt-3'>Sessions</h2>
        <div className="container text-center">
          <div className="ratio mx-auto">
            <lite-youtube videoid="Rzf5Cd-XRzU"></lite-youtube>
          </div>
          <p className='fs-6 mt-4'>
            Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis, aperiam perspiciatis a consequatur porro aut mollitia odio quas, dolor eligendi repellat illo optio quod illum distinctio. Excepturi, pariatur rem.
          </p>
        </div>
      </section>

      <section className='backstage p-3 p-md-5'>
        <Backstage />
      </section>

      <footer>
        <Footer sections={sections} />
      </footer>
    </div>
  );
}

export default App;
