// src/pages/Pro2Page.jsx

import React from "react";
import { Layout } from "../components/Layout";
import { ScheduleCard } from "../components/ScheduleCard"; // 1. PASTIKAN IMPORT INI ADA
import { Clock, Radio, Mic } from "lucide-react";
import { useSchedules } from "../hooks/useSchedules";
import './Pro2Page.css';

export const Pro2Page = () => {
  const { schedules, loading, error } = useSchedules('Pro 2');

  return (
    <Layout>
      <section className="pro2-section">
        <div className="pro2-container">
          
          <div className="pro2-header">
            <div className="header-icon-wrapper">
              <div className="header-icon-circle">
                <Radio className="header-icon" />
              </div>
            </div>
            <h1 className="header-title">RRI Pro 2 Jambi</h1>
            <div className="header-divider"></div>
            <p className="header-subtitle">FM 90.9 MHz</p>
            <p className="header-description">
              Programa Siaran Daerah yang fokus pada pembelajaran, pengembangan diri, dan peningkatan kualitas sumber daya manusia anak muda dan remaja.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card info-card--frekuensi-pro2">
              <Radio className="info-card-icon" />
              <h3 className="info-card-title">Frekuensi</h3>
              <p className="info-card-value">90.9 MHz</p>
            </div>
            
            <div className="info-card info-card--siaran-pro2">
              <Clock className="info-card-icon" />
              <h3 className="info-card-title">Siaran</h3>
              <p className="info-card-value">24 Jam</p>
            </div>
            
            <div className="info-card info-card--fokus-pro2">
              <Mic className="info-card-icon" />
              <h3 className="info-card-title">Fokus</h3>
              <p className="info-card-value">Budaya Daerah</p>
            </div>
          </div>

          <div className="jadwal-section">
            <div className="jadwal-header">
              <h2 className="jadwal-title">Jadwal Siaran Harian</h2>
            </div>
            
            {loading && <p>Memuat jadwal...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
              <div className="space-y-4">
                {/* 2. GUNAKAN ScheduleCard DI SINI */}
                {schedules.map((item) => (
                  <ScheduleCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};