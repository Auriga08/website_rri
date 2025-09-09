// src/components/Homepage.jsx

import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Pastikan CSS ini juga diperbarui
import { Link } from 'react-router-dom';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AnimatedSection } from './AnimatedSection';

// Komponen ImageCarousel yang sudah diperbarui

const ImageCarousel = () => {
  const staticImages = [
    { id: 'static-1', url: "/images/slide1.png", legend: "Suasana Siaran Langsung" },
    { id: 'static-2', url: "/images/slide2.jpg", legend: "Event RRI" },
    { id: 'static-3', url: "/images/slide3.png", legend: "Foto Gedung RRI" },
  ];

  const [carouselImages, setCarouselImages] = useState(staticImages);

  useEffect(() => {
    const fetchEventsForCarousel = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/upcoming');
        const upcomingEvents = response.data;

        const eventImages = upcomingEvents
          .filter(event => event.image_url)
          .map(event => ({
            id: event.id,
            url: `http://localhost:5000${event.image_url}`,
            legend: event.title
          }));
        
        if (eventImages.length > 0) {
          const combinedImages = [...staticImages, ...eventImages];
          setCarouselImages(combinedImages);
        }
      } catch (error) {
        console.error("Gagal mengambil event untuk carousel:", error);
      }
    };
    
    fetchEventsForCarousel();
  }, []);

  return (
    // Pastikan properti autoPlay, interval, dan infiniteLoop ada di sini
    <Carousel 
      showThumbs={false} 
      showStatus={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      className="image-carousel-container"
    >
      {carouselImages.map((image) => (
        <div key={image.id} className="carousel-slide">
          <img src={image.url} alt={image.legend} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};
// Komponen HeroSlider tidak perlu diubah sama sekali
const HeroSlider = () => {
  return (
    <div className="hero-slider-container">
      <ImageCarousel />
      <div className="hero-text-overlay">
        <h1 className="hero-title-overlay">LPP RRI JAMBI</h1>
        <p className="hero-subtitle-overlay">Sekali di Udara, Tetap di Udara</p>
      </div>
    </div>
  );
};


// Komponen Navbar
export const Navbar = () => {
  return (
    // HAPUS "navbar-expand-lg" dari sini
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/images/logo.png" alt="Logo RRI" height="40" />
        </Link>
        
        {/* Tombol hamburger ini sekarang akan selalu terlihat */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavContent"
          aria-controls="navbarNavContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Konten menu akan selalu tersembunyi di awal */}
        <div className="collapse navbar-collapse" id="navbarNavContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Daftar Program
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/pro1">Pro 1</Link></li>
                <li><Link className="dropdown-item" to="/pro2">Pro 2</Link></li>
                <li><Link className="dropdown-item" to="/pro4">Pro 4</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sejarah">Sejarah</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/struktur-organisasi">Struktur Organisasi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event">Event</Link>
            </li>
          </ul>

          <div className="admin-login-link ms-lg-4 mt-3 mt-lg-0">
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Komponen Siaran Langsung
const SiaranLangsung = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="text-center mb-4">Siaran Unggulan RRI Jambi</h3>
        <p className="text-center">Tonton siaran ungglan RRI Jambi melalui YouTube</p>
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/1gGANkjMH5g?si=SukrFc03_yXgmW5Z" title="RRI Jambi" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

// Komponen Program Unggulan
const ProgramUnggulan = () => {
  const programUnggulanData = [
    { id: 1, nama: 'Dialog Jambi Pagi Ini', jam: '08:00', gambar: '/images/pro1.png' },
    { id: 2, nama: 'SPADA', jam: '08:00', gambar: '/images/pro2.png' },
    { id: 3, nama: 'Halo Jambi', jam: '06:00', gambar: '/images/pro4.png' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="text-center mb-5">Program Unggulan</h3>
        <div className="row g-4">
          {programUnggulanData.map((program) => (
            <div key={program.id} className="col-md-4">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <img src={program.gambar} alt={program.nama} height="40" className="mb-3" />
                  <h5>{program.jam}</h5>
                  <p className="mb-0">{program.nama}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 footer-section">
            <img src="/images/logo.png" alt="Logo RRI" height="50" className="mb-3" />
            <p>Radio Republik Indonesia Jambi</p>
          </div>
          
          <div className="col-md-4 mb-4 footer-section">
            <h5>Link Cepat</h5>
            <ul className="list-unstyled">
              <li><Link to="/pro1">Pro 1</Link></li>
              <li><Link to="/pro2">Pro 2</Link></li>
              <li><Link to="/pro4">Pro 4</Link></li>
              <li><Link to="/sejarah">Sejarah</Link></li>
              <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
            </ul>
          </div>

          {/* BAGIAN KONTAK DENGAN GMAPS DIKEMBALIKAN */}
          <div className="col-md-4 mb-4 footer-section">
            <h5>Kontak</h5>
            <p>Jl. Jend. A. Yani No. 17, Telanaipura, Jambi</p>
            <p>Email: rrijambi@example.com</p>
            <p>Telepon: (0741) 123456</p>
            <div className="ratio ratio-16x9 mt-3">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.268388514933!2d103.5828468153448!3d-1.604113936640826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588f0a8db5e9d%3A0x4a413b359f481a9!2sRRI%20Jambi!5e0!3m2!1sen!2sid!4v1662456789012!5m2!1sen!2sid" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        {/* BAGIAN WATERMARK TETAP ADA */}
        <div className="footer-credit-section">
          <p>Website ini dikembangkan oleh:</p>
          <div className="credit-logos">
            <img src="/images/logo-unja.png" alt="Logo Kampus" className="credit-logo" />
            <img src="/images/logo-SI.png" alt="Logo Prodi" className="credit-logo" />
          </div>
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} LPP RRI Jambi. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

// Komponen Utama yang menggabungkan semuanya
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider /> {/* Menggunakan HeroSlider di sini */}
 <AnimatedSection>
        <SiaranLangsung />
      </AnimatedSection>
      
      <AnimatedSection>
        <ProgramUnggulan />
      </AnimatedSection>
      
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;