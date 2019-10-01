import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
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
