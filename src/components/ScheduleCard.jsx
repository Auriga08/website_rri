// src/components/ScheduleCard.jsx

import React, { useState } from 'react';
import { Clock, ChevronDown } from 'lucide-react';
import './ScheduleCard.css'; // Kita akan buat file CSS ini

export const ScheduleCard = ({ item }) => {
  // State untuk melacak apakah deskripsi sedang terbuka atau tertutup
  const [isExpanded, setIsExpanded] = useState(false);
  const serverUrl = 'http://localhost:5000';

  return (
    <div className="schedule-card">
      {/* Bagian header yang bisa diklik untuk membuka/menutup deskripsi */}
      <div className="schedule-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="schedule-time">
          <Clock className="schedule-time-icon" />
          <span>{item.time}</span>
        </div>
        <div className="schedule-title">
          <p className="event-name">{item.event_name}</p>
          <p className="penyiar">{item.penyiar}</p>
        </div>
        {/* Ikon panah yang akan berputar */}
        <ChevronDown className={`expand-icon ${isExpanded ? 'expanded' : ''}`} />
      </div>

      {/* Bagian body yang akan muncul/hilang */}
      <div className={`schedule-card-body ${isExpanded ? 'expanded' : ''}`}>
        <div className="schedule-details">
          {item.flyer_image_url && (
            <img 
              src={`${serverUrl}${item.flyer_image_url}`} 
              alt={item.event_name}
              className="flyer-image"
            />
          )}
          {item.description && (
            <p className="description-text">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};