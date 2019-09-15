import React from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import ArticlesLayout from './ArticlesLayout';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <ArticlesLayout />
      <Footer />
    </React.Fragment>
  );
}
