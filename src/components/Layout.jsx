import React from 'react';
import Sidebar from './userFile/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex gap-10 h-screen bg-white">
      
      {/* Sidebar Section */}
      <Sidebar />

      {/* Page Content Section */}
      <main className="flex-1  overflow-auto rounded-tl-3xl rounded-bl-3xl shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
