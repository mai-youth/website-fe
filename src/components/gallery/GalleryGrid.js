import React from 'react';
import Gallery from 'react-grid-gallery';
import { imageKeys } from '../../constants/gallery';

const getImages = () => imageKeys.map(key => ({
  src: `https://imgur.com/${key}.jpg`,
  thumbnail: `https://imgur.com/${key}.jpg`,
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
