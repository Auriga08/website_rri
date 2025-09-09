// src/pages/EventPage.jsx

import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import axios from 'axios';
import './EventPage.css';

export const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const serverUrl = 'http://localhost:5000'; // Definisikan alamat server

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/events`);
        setEvents(response.data);
      } catch (err) {
        setError('Gagal memuat data event dari server.');
        console.error('Fetch events error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return timeString.slice(0, 5) + ' WIB';
  };

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const pastEvents = events.filter(event => event.status === "past");

  return (
    <Layout>
      <section className="event-section">
        <div className="event-container">
          <div className="text-center mb-12">
            <h1 className="event-title">Event & Kegiatan</h1>
            <div className="event-divider"></div>
            <p className="event-subtitle">
              Berbagai kegiatan dan acara menarik dari RRI Jambi
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-600">Memuat event...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : (
            <>
              <div className="mb-16">
                <h2 className="event-section-title">Event Mendatang</h2>
                {upcomingEvents.length === 0 ? (
                  <div className="event-empty-state">
                    <CalendarIcon className="event-empty-icon" />
                    <p>Belum ada event mendatang</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="event-card">
                        <div className="event-card-image-wrapper">
                          {/* PERUBAHAN DI SINI */}
                          <img src={`${serverUrl}${event.image_url}`} alt={event.title} className="event-card-image" />
                        </div>
                        <div className="event-card-content">
                          <h3 className="event-card-title">{event.title}</h3>
                          <p className="event-card-description">{event.description}</p>
                          <div className="event-card-details-wrapper">
                            <div className="event-card-detail-item">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{formatDate(event.event_date)}</span>
                            </div>
                            <div className="event-card-detail-item">
                              <ClockIcon className="w-4 h-4" />
                              <span>{formatTime(event.event_time)}</span>
                            </div>
                            <div className="event-card-detail-item">
                              <MapPinIcon className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h2 className="event-section-title">Event Sebelumnya</h2>
                {pastEvents.length > 0 && (
                  <div className="grid md:grid-cols-1 gap-6">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="past-event-card">
                        <div className="past-event-image-wrapper">
                          {/* PERUBAHAN DI SINI JUGA */}
                          <img src={`${serverUrl}${event.image_url}`} alt={event.title} className="past-event-image"/>
                        </div>
                        <div className="past-event-content">
                          <h3 className="past-event-title">{event.title}</h3>
                          <p className="past-event-description">{event.description}</p>
                          <div className="past-event-details">
                            <div className="past-event-detail-item">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{formatDate(event.event_date)}</span>
                            </div>
                            <div className="past-event-detail-item">
                              <MapPinIcon className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};