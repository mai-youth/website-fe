import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-dom';

function SideNavBar() {
  return (
    <Menu fixed="left" borderless vertical>
      <Menu.Item as={Link} to="/articles" name="articles">
        <h4>
            Articles
        </h4>
      </Menu.Item>
      <Menu.Item as={Link} to="/users" name="users">
        <h4>
            Users
        </h4>
      </Menu.Item>
    </Menu>
  );
}

export default SideNavBar;
