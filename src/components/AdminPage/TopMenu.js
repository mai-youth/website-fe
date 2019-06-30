import React from 'react';
import { Menu } from 'semantic-ui-react';
import maiLogo from '../Logo';


function TopMenu() {
  return (
    <Menu className="TopMenu" position="top" borderless>
      <Menu.Item className="LogoMenuItem">
        {maiLogo}
      </Menu.Item>
      <Menu.Item className="AdminPageTitle">
        <h2>Admin</h2>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
