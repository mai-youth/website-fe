import React from 'react';
import { Menu } from 'semantic-ui-react';
import MiniHeader from './MiniHeader';
import Logo from '../Logo';
import { shouldShowArticles } from '../../constants/config';

export default function Header() {
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
