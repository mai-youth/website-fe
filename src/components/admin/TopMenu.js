import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../Logo';

function TopMenu() {
  return (
    <Menu className="TopMenu" position="top" borderless>
      <Menu.Item className="LogoMenuItem">
        <Logo />
      </Menu.Item>
      <Menu.Item className="AdminPageTitle">
        <h2>Admin</h2>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
