import React from 'react';
import TopMenu from './TopMenu';
import ArticlesTable from './ArticlesTable';
import SideNavBar from './SideNavBar';

function Layout() {
  return (
    <div className="Grid">
      <div className="TopMenu">
        <TopMenu />
      </div>
      <div className="SideMenu">
        <SideNavBar />
      </div>
      <div className="MainContent">
        <ArticlesTable />
      </div>
    </div>
  );
}

export default Layout;
