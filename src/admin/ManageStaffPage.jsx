// src/admin/ManageStaffPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Edit, Trash2, User } from 'lucide-react';

const StaffFormModal = ({ member, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', position: '', department: '', order_index: 0, photo_url_existing: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // State untuk pratinjau

  useEffect(() => {
    if (member) {
      const existingData = {
        name: member.name || '',
        position: member.position || '',
        department: member.department || '',
        order_index: member.order_index || 0,
        photo_url_existing: member.photo_url || ''
      };
      setFormData(existingData);
      setPreviewUrl(member.photo_url ? `http://localhost:5000${member.photo_url}` : null);
    } else {
      setFormData({ name: '', position: '', department: '', order_index: 0, photo_url_existing: '' });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
  }, [member]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, selectedFile);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-6">{member ? 'Edit Anggota' : 'Tambah Anggota Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="position">Jabatan</label>
            <input id="position" name="position" value={formData.position} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="department">Departemen</label>
            <input id="department" name="department" value={formData.department} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Foto (Upload)</label>
            {/* Tampilkan pratinjau gambar di sini */}
            {previewUrl && <img src={previewUrl} alt="Preview" className="w-24 h-24 object-cover rounded-md my-2" />}
            <input id="photo" name="photo" type="file" onChange={handleFileChange} />
          </div>
           <div className="form-group">
            <label htmlFor="order_index">Urutan Tampil</label>
            <input id="order_index" name="order_index" type="number" value={formData.order_index} onChange={handleChange} />
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

export const ManageStaffPage = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/staff');
      setStaff(response.data);
    } catch (err) {
      setError('Gagal memuat data staff.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleSave = async (memberData, file) => {
    const data = new FormData();
    for (const key in memberData) {
      data.append(key, memberData[key]);
    }
    if (file) {
      data.append('photo', file);
    }

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      if (editingMember) {
        await axios.put(`http://localhost:5000/api/staff/${editingMember.id}`, data, config);
      } else {
        await axios.post('http://localhost:5000/api/staff', data, config);
      }
      closeModalAndRefresh();
    } catch (err) {
      alert('Gagal menyimpan data.');
      console.error('Save error:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus anggota ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/staff/${id}`);
        fetchStaff();
      } catch (err) {
        alert('Gagal menghapus data.');
        console.error('Delete error:', err);
      }
    }
  };

  const openModal = (member = null) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const closeModalAndRefresh = () => {
    setIsModalOpen(false);
    setEditingMember(null);
    fetchStaff();
  };

  if (loading) return <div className="text-center p-8">Memuat data staff...</div>;
  if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">{error}</div>;

  return (
    <div>
      {isModalOpen && <StaffFormModal member={editingMember} onSave={handleSave} onCancel={closeModalAndRefresh} />}

      <div className="page-header">
        <h1 className="page-title">Manage Staff</h1>
        <button onClick={() => openModal()} className="btn btn-primary">
          <PlusCircle size={20} />
          <span>Tambah Anggota</span>
        </button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nama</th>
              <th>Jabatan</th>
              <th>Departemen</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id}>
                <td>
                  {member.photo_url ? (
                    <img src={`http://localhost:5000${member.photo_url}`} alt={member.name} className="staff-photo" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <User size={24} />
                    </div>
                  )}
                </td>
                <td className="font-medium">{member.name}</td>
                <td>{member.position}</td>
                <td>{member.department}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => openModal(member)} className="edit-btn" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(member.id)} className="delete-btn" title="Hapus">
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