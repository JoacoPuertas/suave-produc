import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import Backstage from './components/Backstage'; 
import SessionsPage from './components/SessionsPage'; 
import AboutUsPage from './components/AboutUsPage';  
import ContactPage from './components/ContactPage';  
import BackstagePage from './components/BackstagePage'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@justinribeiro/lite-youtube';

function MainContent() {
  const location = useLocation(); // Hook para detectar la ruta actual

  const mainSectionClass = 
    location.pathname === '/sessions' ? 'main-section sessions-bg' :
    location.pathname === '/' ? 'main-section home-bg' :
    'main-section no-bg';

  // Definir todas las secciones disponibles
  const allSections = [
    { name: 'Home', link: '/' },
    { name: 'Sessions', link: '/sessions' },
    { name: 'Backstage', link: '/backstage' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  // Filtrar las secciones excluyendo la ruta actual
  const sections = allSections.filter(section => section.link !== location.pathname);

  return (
    <>
      <main className={mainSectionClass}>
        <Navegator />
      </main>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className='session px-2 py-3'>
                <h2 className='text-center mb-5 mt-3'><b>Sessions</b></h2>
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
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/backstage" element={<BackstagePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer>
        <Footer sections={sections} /> 
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
