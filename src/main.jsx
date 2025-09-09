// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. TAMBAHKAN BARIS IMPORT INI
import { BrowserRouter } from 'react-router-dom';

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Sekarang BrowserRouter sudah dikenal dan bisa digunakan */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);