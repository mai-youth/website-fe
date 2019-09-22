import React from 'react';
import Gallery from 'react-grid-gallery';
import { imageLinks } from '../../constants/gallery';

const getImages = () => imageLinks.map(link => ({
  src: `${link}.jpg`,
  thumbnail: `${link}.jpg`,
}));

export default function GalleryGrid() {
  return (
    <div className="gallery-container">
      <Gallery
        images={getImages()}
        enableImageSelection={false}
        backdropClosesModal
      />
    </div>
  );
}
