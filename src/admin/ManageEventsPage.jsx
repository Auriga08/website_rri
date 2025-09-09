// src/admin/ManageEventsPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

// Komponen Modal Form dengan Pratinjau Gambar
const EventFormModal = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '', description: '', event_date: '', event_time: '', location: '', status: 'upcoming', image_url_existing: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (event) {
      const formattedEvent = {
        ...event,
        event_date: event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : '',
        event_time: event.event_time ? event.event_time.slice(0, 5) : '',
        image_url_existing: event.image_url || ''
      };
      setFormData(formattedEvent);
      setPreviewUrl(event.image_url ? `http://localhost:5000${event.image_url}` : null);
    } else {
      setFormData({ title: '', description: '', event_date: '', event_time: '', location: '', status: 'upcoming', image_url_existing: '' });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, selectedFile);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-6">{event ? 'Edit Event' : 'Tambah Event Baru'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Judul Event</label>
            <input id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Deskripsi</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="event_date">Tanggal</label>
              <input id="event_date" name="event_date" type="date" value={formData.event_date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="event_time">Waktu</label>
              <input id="event_time" name="event_time" type="time" value={formData.event_time} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Lokasi</label>
            <input id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Gambar Flyer (Upload)</label>
            {previewUrl && <img src={previewUrl} alt="Preview" className="w-full h-auto object-cover rounded-md my-2" style={{maxHeight: '200px'}} />}
            <input id="image" name="image" type="file" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button type="button" onClick={onCancel} className="btn">Batal</button>
            <button type="submit" className="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ManageEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (err) {
      setError('Gagal memuat data event.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSave = async (eventData, file) => {
    const data = new FormData();
    for (const key in eventData) {
      data.append(key, eventData[key]);
    }
    if (file) {
      data.append('image', file);
    }

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      if (editingEvent) {
        await axios.put(`http://localhost:5000/api/events/${editingEvent.id}`, data, config);
      } else {
        await axios.post('http://localhost:5000/api/events', data, config);
      }
      closeModalAndRefresh();
    } catch (err) {
      alert('Gagal menyimpan data.');
      console.error('Save error:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus event ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/events/${id}`);
        fetchEvents();
      } catch (err) {
        alert('Gagal menghapus data.');
        console.error('Delete error:', err);
      }
    }
  };
  
  const openModal = (event = null) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const closeModalAndRefresh = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
    fetchEvents();
  };
  
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

  if (loading) return <div className="text-center p-8">Memuat data event...</div>;
  if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">{error}</div>;

  return (
    <div>
      {isModalOpen && <EventFormModal event={editingEvent} onSave={handleSave} onCancel={closeModalAndRefresh} />}

      <div className="page-header">
        <h1 className="page-title">Manage Events</h1>
        <button onClick={() => openModal()} className="btn btn-primary">
          <PlusCircle size={20} />
          <span>Tambah Event</span>
        </button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Judul Event</th>
              <th>Tanggal</th>
              <th>Lokasi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="font-medium">{event.title}</td>
                <td>{formatDate(event.event_date)}</td>
                <td>{event.location}</td>
                <td>
                  <span className={`status-badge status-badge--${event.status}`}>
                    {event.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => openModal(event)} className="edit-btn" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(event.id)} className="delete-btn" title="Hapus">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};