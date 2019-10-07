import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../Logo';
import { shouldShowArticles } from '../../constants/config';

export default function Header() {
  return (
    <Menu
      borderless
      fixed="top"
      className="menu-header"
    >
      <Menu.Item><Logo /></Menu.Item>
      <Menu.Item className="menu-item" href="/">MAI Youth</Menu.Item>

      <Menu.Menu position="right">
        {shouldShowArticles && <Menu.Item className="menu-item" href="/articles">Articles</Menu.Item>}
        <Menu.Item className="menu-item" href="/events">Upcoming Events</Menu.Item>
        <Menu.Item className="menu-item" href="/gallery">Gallery</Menu.Item>
        <Menu.Item className="menu-item" href="/contact">Contact Us</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
