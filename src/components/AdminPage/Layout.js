import React from 'react';
import SideNavBar from './SideNavBar';
import TopMenu from './TopMenu';

function Layout() {
  return (
    <div className="grid">
      <div className="main-content">
        <SideNavBar />
      </div>
      <div className="menu">
        <TopMenu />
      </div>
    </div>
  );
}

export default Layout;
