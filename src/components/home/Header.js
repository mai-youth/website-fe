import React from 'react';
import { Menu } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import MiniHeader from './MiniHeader';
import Logo from '../Logo';
import { shouldShowArticles } from '../../constants/config';

const QuizMsg = (props) => {
  return <a
    target="_blank"
    rel="noopener noreferrer" 
    style={{ color: 'white', display: 'block', textDecoration: 'underline' }}
    href="https://quizizz.com/join?gc=00783090">
      <b>Click here</b> to join our Ramadan Quiz and have a chance to win an Amazon Echo!
  </a>
}

export default function Header() {
  // Show a note about the Ramadan Quiz if the date is before 7 May
  // Quiz ends on 7 May
  if (new Date() < new Date('7 May 2021')) {
    toast.info(QuizMsg, {
      position: 'top-center',
      closeOnClick: false,
      draggable: true,
    });
  }

  if (window.innerWidth < 767) {
    return <MiniHeader />;
  }

  return (
    <Menu
      borderless
      stackable
      fixed="top"
      className="menu-header"
    >
      <Menu.Item className="menu-logo" href="/">
        <Logo />
        <div href="/" className="menu-item">MAI Youth</div>
      </Menu.Item>

      <Menu.Menu position="right">
        {shouldShowArticles && <Menu.Item className="menu-item" href="/articles">Articles</Menu.Item>}
        <Menu.Item className="menu-item" href="/events">Upcoming Events</Menu.Item>
        <Menu.Item className="menu-item" href="/gallery">Gallery</Menu.Item>
        <Menu.Item className="menu-item" href="/contact">Contact Us</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
