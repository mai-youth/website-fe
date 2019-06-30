import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-dom';

function SideNavBar() {
  return (
    <Menu className="SideNavBar" positon="left" vertical>
      <Menu.Item className="NavBarItem" as={Link} to="/articles" name="articles">
        <Icon className="NavBarIcon" name="file alternate" />
      </Menu.Item>
      <Menu.Item className="NavBarItem" as={Link} to="/users" name="users">
        <Icon className="NavBarIcon" name="users" />
      </Menu.Item>
    </Menu>
  );
}

export default SideNavBar;
