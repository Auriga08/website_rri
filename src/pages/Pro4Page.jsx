// src/pages/Pro4Page.jsx

import React from "react";
import { Layout } from "../components/Layout";
import { ScheduleCard } from "../components/ScheduleCard"; // 1. PASTIKAN IMPORT INI ADA
import { GraduationCap, Radio, Clock } from "lucide-react";
import { useSchedules } from "../hooks/useSchedules";
import './Pro4Page.css';

export const Pro4Page = () => {
  const { schedules, loading, error } = useSchedules('Pro 4');

  return (
    <Layout>
      <section className="pro4-section">
        <div className="pro4-container">
          
          <div className="pro4-header">
            <div className="header-icon-wrapper">
              <div className="header-icon-circle">
                <GraduationCap className="header-icon" />
              </div>
            </div>
            <h1 className="header-title">RRI Pro 4 Jambi</h1>
            <div className="header-divider"></div>
            <p className="header-subtitle">FM 99.2 MHz</p>
            <p className="header-description">
              Programa Siaran yang didedikasikan untuk Mempelajari Budaya Daerah yang ada di Indonesia.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card info-card--frekuensi-pro4">
              <Radio className="info-card-icon" />
              <h3 className="info-card-title">Frekuensi</h3>
              <p className="info-card-value">99.2 MHz</p>
            </div>
            
            <div className="info-card info-card--siaran-pro4">
              <Clock className="info-card-icon" />
              <h3 className="info-card-title">Siaran</h3>
              <p className="info-card-value">24 Jam</p>
            </div>
            
            <div className="info-card info-card--fokus-pro4">
              <GraduationCap className="info-card-icon" />
              <h3 className="info-card-title">Fokus</h3>
              <p className="info-card-value">Pendidikan</p>
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