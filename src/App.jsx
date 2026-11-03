import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicDashboard from './PublicDashboard';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

// Komponen pelindung rute admin
function ProtectedAdminRoute({ children }) {
  const isAuth = localStorage.getItem('isAdminAuth') === 'true';
  return isAuth ? children : <Navigate to="/portal-petugas" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Halaman Publik (Default) - Tidak ada link login */}
        <Route path="/" element={<PublicDashboard />} />

        {/* 2. Halaman Login Petugas Tersembunyi */}
        <Route path="/portal-petugas" element={<AdminLogin />} />

        {/* 3. Panel Manajemen Data (Hanya bisa dibuka setelah login) */}
        <Route
          path="/portal-petugas/manajemen-data"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        {/* Redirect sembarang URL ke halaman publik */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}