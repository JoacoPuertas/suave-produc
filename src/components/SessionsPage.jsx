import React from 'react';
import './SessionsPage.css';
import IndividualIntervalsExample from './carrusel';

function Sessions() {
  return (
    <div className="sessions-container py-lg-4">
      <div className="carousel-container">
        <IndividualIntervalsExample />
      </div>
    </div>
  );
}

export default Sessions;
