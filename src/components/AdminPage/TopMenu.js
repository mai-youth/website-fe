import React from 'react';
import { Menu } from 'semantic-ui-react';
import maiLogo from '../Logo';


function TopMenu() {
  return (
    <Menu position="top" className="top-menu" borderless>
      <Menu.Item className="LogoMenuItem">
        <div className="display-inline logo-space">
          {maiLogo}
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default TopMenu;
