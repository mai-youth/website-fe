import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import Logo from '../Logo';
import { shouldShowArticles } from '../../constants/config';

export default function Header() {
  return (
    <Menu
      borderless
      stackable
      fixed="top"
      className="menu-header"
    >
      <div className="wrapper">
        <Menu.Item className="menu-logo" href="/">
          <Logo />
          <div href="/" className="menu-item">MAI Youth</div>
        </Menu.Item>

        <Dropdown item text="More" floating direction="left" className="menu-item menu-dropdown">
          <Dropdown.Menu>
            {shouldShowArticles && <Menu.Item className="menu-item" href="/articles">Articles</Menu.Item>}
            <Menu.Item className="menu-item" href="/events">Upcoming Events</Menu.Item>
            <Menu.Item className="menu-item" href="/gallery">Gallery</Menu.Item>
            <Menu.Item className="menu-item" href="/contact">Contact Us</Menu.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Menu>
  );
}
