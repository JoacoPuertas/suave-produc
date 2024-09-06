import React from 'react';
import Navegator from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
      <section className='session p-3 '>
        <h2 className='text-center'>Sesions</h2>
        <div className="container">
          <lite-youtube videoid="710bxzd_wY"></lite-youtube>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea qui vel, repudiandae mollitia in unde officiis ex. Rerum blanditiis nisi impedit doloribus quis at reiciendis cupiditate nemo soluta eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora est ullam officia beatae, adipisci consectetur corporis impedit vero commodi, non aliquam. Aliquam repellat, quaerat consectetur odio eius quis eos amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero cupiditate vel ducimus facere repellendus at deserunt deleniti hic fugiat aliquam alias corporis fugit, odit aut atque quo doloribus. Minus!</p>
        </div>
      </section>
      <section className='backstage'>
        <div className="container gallery-grid">
          <div className="gallery-item img1"></div>
          <div className="gallery-item img2"></div>
          <div className="gallery-item img3"></div>
          <div className="gallery-item img4"></div>
        </div>
      </section>

      <footer>
        <Footer sections={sections} />
      </footer>
    </div>
  );
}

export default App;  
