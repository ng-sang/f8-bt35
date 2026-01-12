// layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav'; // Import Nav vào đây

const MainLayout = () => {
  return (
    <div>
      <Nav /> {/* Nav chỉ xuất hiện ở các trang thuộc MainLayout */}
      <hr />
      <main>
        <Outlet /> {/* Nơi hiện Home, About, Products... */}
      </main>
    </div>
  );
};

export default MainLayout;