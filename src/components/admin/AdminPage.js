import React from 'react';
import TopMenu from './TopMenu';
import ArticlesTable from './ArticlesTable';

function AdminPage() {
  return (
    <div className="admin-layout">
      <TopMenu />
      <ArticlesTable />
    </div>
  );
}

export default AdminPage;
