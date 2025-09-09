// src/admin/ManageSchedulesPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

// Komponen Modal Form untuk Jadwal
const ScheduleFormModal = ({ schedule, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ channel: 'Pro 1', time: '', event_name: '', penyiar: '', description: '', flyer_image_url_existing: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (schedule) {
      setFormData({ ...schedule, flyer_image_url_existing: schedule.flyer_image_url || '' });
    } else {
      setFormData({ channel: 'Pro 1', time: '', event_name: '', penyiar: '', description: '', flyer_image_url_existing: '' });
    }
    setSelectedFile(null);
  }, [schedule]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, selectedFile);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-6">{schedule ? 'Edit Jadwal' : 'Tambah Jadwal Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="channel">Channel</label>
            <select id="channel" name="channel" value={formData.channel} onChange={handleChange}>
              <option>Pro 1</option><option>Pro 2</option><option>Pro 4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="event_name">Nama Acara</label>
            <input id="event_name" name="event_name" value={formData.event_name} onChange={handleChange} required />
          </div>
          <div className="form-grid">
            <div className="form-group"><label htmlFor="time">Waktu</label><input id="time" name="time" value={formData.time} onChange={handleChange} placeholder="Contoh: 08:00 - 10:00" required /></div>
            <div className="form-group"><label htmlFor="penyiar">Penyiar</label><input id="penyiar" name="penyiar" value={formData.penyiar} onChange={handleChange} /></div>
          </div>
          <div className="form-group"><label htmlFor="description">Deskripsi</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea></div>
          <div className="form-group">
            <label htmlFor="flyer">Gambar Flyer (Upload)</label>
            <input id="flyer" name="flyer" type="file" onChange={handleFileChange} />
            {formData.flyer_image_url_existing && <p className="text-xs text-gray-500 mt-1">Flyer saat ini: {formData.flyer_image_url_existing}</p>}
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

export const ManageSchedulesPage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/schedules');
      setSchedules(response.data);
    } catch (err) {
      setError('Gagal memuat data. Pastikan server backend berjalan.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleSave = async (scheduleData, file) => {
    const data = new FormData();
    for (const key in scheduleData) { data.append(key, scheduleData[key]); }
    if (file) { data.append('flyer', file); }

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      if (editingSchedule) {
        await axios.put(`http://localhost:5000/api/schedules/${editingSchedule.id}`, data, config);
      } else {
        await axios.post('http://localhost:5000/api/schedules', data, config);
      }
      closeModalAndRefresh();
    } catch (err) { alert('Gagal menyimpan data.'); console.error('Save error:', err); }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/schedules/${id}`);
        setSchedules(schedules.filter(schedule => schedule.id !== id));
      } catch (err) {
        alert('Gagal menghapus jadwal.');
        console.error('Delete error:', err);
      }
    }
  };
  
  const openModal = (schedule = null) => { setEditingSchedule(schedule); setIsModalOpen(true); };
  const closeModalAndRefresh = () => { setIsModalOpen(false); setEditingSchedule(null); fetchSchedules(); };

  if (loading) return <div className="text-center p-8">Memuat jadwal...</div>;
  if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">{error}</div>;

  return (
    <div>
      {isModalOpen && <ScheduleFormModal schedule={editingSchedule} onSave={handleSave} onCancel={closeModalAndRefresh} />}
      <div className="page-header">
        <h1 className="page-title">Manage Schedules</h1>
        <button onClick={() => openModal()} className="btn btn-primary"><PlusCircle size={20} /><span>Tambah Jadwal Baru</span></button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Waktu</th>
              <th>Nama Acara</th>
              <th>Penyiar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td className="font-medium">{schedule.channel}</td>
                <td>{schedule.time}</td>
                <td>{schedule.event_name}</td>
                <td>{schedule.penyiar}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => openModal(schedule)} className="edit-btn" title="Edit"><Edit size={18} /></button>
                    <button onClick={() => handleDelete(schedule.id)} className="delete-btn" title="Hapus"><Trash2 size={18} /></button>
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