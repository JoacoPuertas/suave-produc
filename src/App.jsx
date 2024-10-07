import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import Backstage from './components/Backstage';
import SessionsPage from './components/SessionsPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import BackstagePage from './components/BackstagePage';
import video from './1006.webm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@justinribeiro/lite-youtube';

function MainContent() {
  const location = useLocation(); // Hook para detectar la ruta actual

  const mainSectionClass =
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
                <h6 className='text-center mt-3'>Session #1</h6>
                <h2 className='text-center mb-3'><b>A SALVO</b></h2>
                <div className="container text-center">
                  <div className="ratio mx-auto">
                    {/*<lite-youtube videoid="Rzf5Cd-XRzU"></lite-youtube>*/}
                    <video src={video} autoPlay loop muted></video>
                  </div>
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
