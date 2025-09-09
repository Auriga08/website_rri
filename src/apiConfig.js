// src/apiConfig.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rri-backend-xxxx.vercel.app/api' // Ganti dengan URL Vercel Anda
});

export default apiClient;