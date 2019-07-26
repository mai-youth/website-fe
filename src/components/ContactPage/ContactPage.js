import React from 'react';
import Header from '../HomePage/Header';
import ContactForm from './ContactForm';
import Footer from '../HomePage/Footer';

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
