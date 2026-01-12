// layouts/UserLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#333', color: '#fff', height: '100vh' }}>
        <h2>User Panel</h2>
        <nav>
           <Link to="/users" style={{color: 'white'}}>Dashboard</Link> <br/>
           <Link to="/users/sales" style={{color: 'white'}}>Sales</Link> <br/>
           <Link to="/" style={{color: 'yellow'}}>Quay về trang chủ</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Nơi hiện Dashboard hoặc Sale */}
      </main>
    </div>
  );
};

export default UserLayout;