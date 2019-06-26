import React from 'react';
import { Menu } from 'semantic-ui-react';

function SideNavBar() {
  return (
    <Menu fixed="left" borderless vertical>
      <Menu.Item name="Admin Page">
        <h4>
            Articles
        </h4>
      </Menu.Item>
      <Menu.Item name="Users Page">
        <h4>
            Users
        </h4>
      </Menu.Item>
    </Menu>
  );
}

export default SideNavBar;
