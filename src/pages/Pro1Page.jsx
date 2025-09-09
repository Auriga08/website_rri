// src/pages/Pro1Page.jsx

import React from "react";
import { Layout } from "../components/Layout";
import { ScheduleCard } from "../components/ScheduleCard";
import { Clock, Radio, Mic } from "lucide-react";
import { useSchedules } from "../hooks/useSchedules";
import './Pro1Page.css';

export const Pro1Page = () => {
  const { schedules, loading, error } = useSchedules('Pro 1');

  return (
    <Layout>
      <section className="pro1-section">
        <div className="pro1-container">
          
          <div className="pro1-header">
            <div className="header-icon-wrapper">
              <div className="header-icon-circle">
                <Radio className="header-icon" />
              </div>
            </div>
            <h1 className="header-title">RRI Pro 1 Jambi</h1>
            <div className="header-divider"></div>
            <p className="header-subtitle">FM 88.5 MHz</p>
            <p className="header-description">
              Programa Siaran Nasional yang menyajikan informasi, berita, dan hiburan berkualitas untuk seluruh masyarakat Indonesia.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card info-card--frekuensi">
              <Radio className="info-card-icon" />
              <h3 className="info-card-title">Frekuensi</h3>
              <p className="info-card-value">88.5 MHz</p>
            </div>
            
            <div className="info-card info-card--siaran">
              <Clock className="info-card-icon" />
              <h3 className="info-card-title">Siaran</h3>
              <p className="info-card-value">24 Jam</p>
            </div>
            
            <div className="info-card info-card--jangkauan">
              <Mic className="info-card-icon" />
              <h3 className="info-card-title">Jangkauan</h3>
              <p className="info-card-value">Nasional</p>
            </div>
          </div>

          <div className="jadwal-section">
            <div className="jadwal-header">
              <h2 className="jadwal-title">Jadwal Siaran Harian</h2>
            </div>

            {loading && (
              <div className="loading-spinner-wrapper">
                <div className="loading-spinner"></div>
                <p>Memuat jadwal...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                Error: {error}
              </div>
            )}

            {!loading && !error && (
              <div className="space-y-4">
                {schedules.map((item, index) => (
                  <ScheduleCard 
                    key={index}
                    item={item}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};