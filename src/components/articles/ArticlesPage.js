import React from 'react';
import Header from '../home/Header';
import ArticlesLayout from './ArticlesLayout';
import Footer from '../home/Footer';

export default function ArticlesPage() {
  return (
    <React.Fragment>
      <Header />
      <ArticlesLayout />
      <Footer />
    </React.Fragment>
  );
}
