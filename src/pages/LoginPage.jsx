// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      // GANTI localhost:5000 dengan URL backend yang sudah di-deploy
      const response = await axios.post(
        'https://rri-backend-r5v52wdlf-ariaga-tarigans-projects.vercel.app/api/login',
        {
          username,
          password,
        }
      );

      // Jika berhasil, simpan token & pindah halaman
      localStorage.setItem('token', response.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Gagal terhubung ke server.');
      }
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Admin Login</h2>
          <p className="login-subtitle">
            Silakan masuk untuk mengelola konten website.
          </p>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
