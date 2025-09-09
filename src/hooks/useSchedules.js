// src/hooks/useSchedules.js (Versi Final)

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSchedules = (programName) => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/schedules/${programName}`);
        setSchedules(response.data);
      } catch (err) {
        console.error('Failed to fetch schedules:', err);
        setError('Gagal memuat jadwal dari server.');
      } finally {
        setLoading(false);
      }
    };

    // --- PERUBAHAN DI SINI ---
    // Hanya jalankan pengambilan data jika programName benar-benar ada (tidak kosong)
    if (programName) {
        fetchSchedules();
    } else {
        // Jika tidak ada nama program, langsung set loading ke false
        setLoading(false);
    }

  }, [programName]); // Hook ini akan berjalan lagi jika nama program berubah

  return { schedules, loading, error };
};