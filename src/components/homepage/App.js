import React from 'react';
import { Image } from 'semantic-ui-react';
import Header from './Header';
import screenImg from '../../assets/prayer.jpg';

export default function App() {
  return (
    <div>
      <Header />
      <Image src={screenImg} fluid />
    </div>
  );
}
