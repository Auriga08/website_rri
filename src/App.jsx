// src/App.jsx (Versi Baru dengan Routing)

// 1. Import semua yang dibutuhkan dari react-router-dom dan halaman-halamanmu
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import { Pro1Page } from './pages/Pro1Page';
import { Pro2Page } from './pages/Pro2Page';
import { Pro4Page } from './pages/Pro4Page';
import { SejarahPage } from './pages/SejarahPage';
import { StrukturOrganisasiPage } from './pages/StrukturOrganisasiPage'; 
import { EventPage } from './pages/EventPage';
// Import halaman admin
import { LoginPage } from './pages/LoginPage';
import { AdminLayout } from './admin/AdminLayout';
import { DashboardPage } from './admin/DashboardPage';
import { ManageStaffPage } from './admin/ManageStaffPage';
import { ManageSchedulesPage } from './admin/ManageSchedulesPage';
import { ManageEventsPage } from './admin/ManageEventsPage';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pro1" element={<Pro1Page />} />
      <Route path="/pro2" element={<Pro2Page />} />
      <Route path="/pro4" element={<Pro4Page />} />
      <Route path="/sejarah" element={<SejarahPage />} />
      <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/login" element={<LoginPage />} />
    {/* Rute Halaman Admin (Struktur Bersarang) */}
      <Route path="/admin" element={<AdminLayout />}> 
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="staff" element={<ManageStaffPage />} />
        <Route path="schedules" element={<ManageSchedulesPage />} />
        <Route path="events" element={<ManageEventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;