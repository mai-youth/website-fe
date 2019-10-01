import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import FBEvents from './FBEvents';

export default function EventsPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="events-container">
        <FBEvents />
      </div>
      <Footer />
    </React.Fragment>
  );
}
