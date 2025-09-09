// src/components/Layout/Layout.jsx

import React from 'react';
// Pastikan HomePage.jsx mengekspor Navbar dan Footer
import { Navbar, Footer } from './HomePage';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};