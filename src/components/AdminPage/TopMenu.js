import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

function TopMenu() {
  return (
    <Menu fixed="top" className="top-menu">
      <Menu.Item className="logo-space-menu-item">
        <div className="display-inline logo-space">
          <Image src="src/Assets/maiLogo.jpg" />
          <p>Mai Youth</p>
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
