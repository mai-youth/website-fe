import React from 'react';
import SideNavBar from './SideNavBar';

function Layout() {
  return (
    <div className="grid">
      <div className="menu">
        <h3>
              Top Menu
        </h3>
      </div>
      <div className="main-content">
        <SideNavBar />
      </div>
    </div>
  );
}

export default Layout;
