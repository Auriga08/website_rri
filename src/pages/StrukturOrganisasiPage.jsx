// src/pages/StrukturOrganisasiPage.jsx

import React, { useState, useEffect } from 'react'; // Tambahkan useEffect
import { Layout } from '../components/Layout';
import axios from 'axios'; // Impor axios
import { User } from 'lucide-react';
import './StrukturOrganisasiPage.css';

export const StrukturOrganisasiPage = () => {
  // Ganti data tiruan dengan state kosong
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const serverUrl = 'http://localhost:5000';

  // useEffect untuk mengambil data dari backend saat halaman dimuat
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/staff`);
        setMembers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data staff:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []); // Array kosong berarti hanya dijalankan sekali

  const sections = ['Programa', 'Teknik', 'Berita', 'Administrasi', 'Keuangan'];

  return (
    <Layout>
      <section className="org-section">
        <div className="org-container">
          <div className="text-center mb-12">
            <h1 className="org-title">
              Struktur Organisasi
            </h1>
            <div className="org-divider"></div>
            <p className="org-subtitle">
              Struktur kepemimpinan RRI Jambi yang profesional dan berpengalaman
            </p>
          </div>

          <div className="member-card-grid">
            {loading ? (
              <p className="text-center col-span-full">Memuat data anggota...</p>
            ) : (
              members.map((member) => (
                <div key={member.id} className="member-card">
                  <div className="member-photo-wrapper">
                    {/* Sesuaikan path gambar agar mengarah ke server backend */}
                    {member.photo_url ? (
                      <img
                        src={`${serverUrl}${member.photo_url}`}
                        alt={member.name}
                        className="member-photo"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <User size={48} className="text-gray-400"/>
                      </div>
                    )}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">
                      {member.name}
                    </h3>
                    <p className="member-position">
                      {member.position}
                    </p>
                    <p className="member-department">
                      {member.department}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="org-chart-section">
            <h2 className="org-chart-title">
              Bagan Organisasi
            </h2>
            <div className="org-chart-container">
              <div className="org-chart-level">
                <div className="org-chart-node org-chart-node--head">
                  Kepala Stasiun
                </div>
              </div>
              <div className="org-chart-level org-chart-level--sections">
                {sections.map((section) => (
                  <div key={section} className="org-chart-node org-chart-node--section">
                    <div className="font-medium">Kepala Seksi</div>
                    <div className="font-bold">{section}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};