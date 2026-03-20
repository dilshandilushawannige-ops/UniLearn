import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
