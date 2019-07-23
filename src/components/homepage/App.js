import React from 'react';
import { Image } from 'semantic-ui-react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import screenImg from '../../assets/prayer.jpg';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Image src={screenImg} fluid />
      <Content
        title="Placeholder Title"
        body="This is sample text I will fix later but it is just temporary."
        color="#ccf2f9"
        borderless
      />
      <Content
        title="Placeholder Title"
        body="This is sample text I will fix later but it is just temporary."
      />
      <Footer />
    </React.Fragment>
  );
}
