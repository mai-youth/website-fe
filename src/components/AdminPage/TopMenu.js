import React from 'react';
import { Menu, Image } from 'semantic-ui-react';


function TopMenu() {
  return (
    <Menu position="top" className="top-menu">
      <Menu.Item className="LogoMenuItem">
        <div className="display-inline logo-space">
          <Image src=".../Assets/maiLogo.jpg" />
          <p>Mai Youth</p>
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
