import React from 'react';
import Header from '../home/Header';
import GalleryGrid from './GalleryGrid';
import Footer from '../home/Footer';

export default function ArticlesPage() {
  return (
    <React.Fragment>
      <Header />
      <GalleryGrid />
      <Footer />
    </React.Fragment>
  );
}
