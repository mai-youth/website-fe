import React from 'react';
import Header from '../homepage/Header';
import ArticlesLayout from './ArticlesLayout';
import Footer from '../homepage/Footer';

export default function ArticlesPage() {
  return (
    <React.Fragment>
      <Header />
      <ArticlesLayout />
      <Footer />
    </React.Fragment>
  );
}
