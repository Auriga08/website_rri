// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Username dan password tidak boleh kosong.');
      return;
    }

    try {
      // Kirim data ke backend
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Jika berhasil, simpan token (misal di localStorage) dan pindah halaman
      localStorage.setItem('token', response.data.token);
      navigate('/admin/dashboard');

    } catch (err) {
      // Jika backend mengirim error, tampilkan pesannya
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Menampilkan "INVALID DATAMU TIDAK ADA"
      } else {
        setError('Gagal terhubung ke server.');
      }
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* ... sisa kode JSX form tidak berubah ... */}
          <h2 className="login-title">Admin Login</h2>
          <p className="login-subtitle">Silakan masuk untuk mengelola konten website.</p>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </Layout>
  );
};