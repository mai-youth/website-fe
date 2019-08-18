import React from 'react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import ArticlesLayout from './ArticlesLayout';

export default function ArticlesPage() {
  return (
    <React.Fragment>
      <Header />
      <ArticlesLayout />
      <Footer />
    </React.Fragment>
  );
}
