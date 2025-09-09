// src/components/HeroSlider.jsx

import React from 'react';
import { ImageCarousel } from './ImageCarousel'; // Mengimpor carousel yang sudah kita buat

export const HeroSlider = () => {
  return (
    // Wadah utama yang akan menampung carousel dan teks
    <div className="hero-slider-container">
      {/* Carousel gambar sebagai latar belakang */}
      <ImageCarousel />

      {/* Teks yang akan ditampilkan di atas carousel */}
      <div className="hero-text-overlay">
        <h1 className="hero-title-overlay">LPP RRI JAMBI</h1>
        <p className="hero-subtitle-overlay">Sekali di Udara, Tetap di Udara</p>
      </div>
    </div>
  );
};