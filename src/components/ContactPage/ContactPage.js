import React from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import ContactForm from './ContactForm';

export default function MainPage() {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
      <div className="divider" />
      <Footer />
    </React.Fragment>
  );
}
