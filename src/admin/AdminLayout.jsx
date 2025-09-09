// src/admin/AdminLayout.jsx

import React, { useState } from 'react'; // 1. Impor useState
import { Link, Outlet, NavLink } from 'react-router-dom'; // 2. Impor NavLink
import { LayoutDashboard, List, Calendar, Users, LogOut, Menu, X } from 'lucide-react'; // 3. Impor ikon Menu & X
import './Admin.css';

export const AdminLayout = () => {
  // 4. State untuk mengontrol sidebar di layar kecil
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Tombol Hamburger yang hanya terlihat di layar kecil (diatur oleh CSS) */}
      <button 
        className="sidebar-toggle" 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay latar belakang saat sidebar terbuka di layar kecil */}
      <div 
        className={`mobile-overlay ${isSidebarOpen ? 'is-open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Tambahkan class 'is-open' saat sidebar terbuka */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
          <img src="/images/logo.png" alt="RRI Logo" />
          <span>Admin Panel</span>
        </div>
        <nav className="sidebar-nav">
          {/* Menggunakan NavLink agar link yang aktif bisa diberi style berbeda */}
          <NavLink to="/admin/dashboard" className="nav-link" onClick={() => setSidebarOpen(false)}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/admin/schedules" className="nav-link" onClick={() => setSidebarOpen(false)}>
            <List size={20} />
            <span>Manage Schedules</span>
          </NavLink>
          
          <NavLink to="/admin/events" className="nav-link" onClick={() => setSidebarOpen(false)}>
            <Calendar size={20} />
            <span>Manage Events</span>
          </NavLink>

          <NavLink to="/admin/staff" className="nav-link" onClick={() => setSidebarOpen(false)}>
            <Users size={20} />
            <span>Manage Staff</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
           <Link to="/" className="nav-link logout-link">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
      
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};