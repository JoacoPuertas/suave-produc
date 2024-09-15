import React from 'react';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import Backstage from './components/Backstage'; // Este solo se usará en el home
import SessionsPage from './components/SessionsPage'; // Importa el componente de página Sessions
import AboutUsPage from './components/AboutUsPage';  // Importa el componente About Us
import ContactPage from './components/ContactPage';  // Importa el componente Contact
import BackstagePage from './components/BackstagePage'; // Importa la página Backstage
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@justinribeiro/lite-youtube';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const sections = [
    { name: 'Sessions', link: '/sessions' },
    { name: 'Backstage', link: '/backstage' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <Router>
      <div className="App">
        <main className="main-section">
          <Navegator />
        </main>

        {/* Definición de las rutas */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <section className='session px-2 py-3'>
                  <h2 className='text-center mb-5 mt-3'>Sessions</h2>
                  <div className="container text-center">
                    <div className="ratio mx-auto">
                      <lite-youtube videoid="Rzf5Cd-XRzU"></lite-youtube>
                    </div>
                    <p className='fs-6 mt-4'>
                      Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </section>

                <section className='backstage p-3 p-md-5'>
                  <Backstage /> 
                </section>
              </>
            }
          />

          {/* Otras páginas */}
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/backstage" element={<BackstagePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer>
          <Footer sections={sections} />
        </footer>
      </div>
    </Router>
  );
}

export default App;
