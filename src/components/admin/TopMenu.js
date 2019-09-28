import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../Logo';

function TopMenu() {
  return (
    <Menu className="admin-header" position="top" borderless>
      <Menu.Item href="/">
        <Logo />
      </Menu.Item>
      <Menu.Item className="title">
        <h2>Admin</h2>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
