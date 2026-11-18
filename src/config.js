import { Capacitor } from '@capacitor/core';

// Mengambil URL API yang sesuai:
// 1. Pada aplikasi mobile (Android Emulator): host Windows diakses via IP khusus http://10.0.2.2:8000
// 2. Pada browser di device lain (HP / Laptop di Wi-Fi yang sama): otomatis menggunakan IP laptop host (misal http://10.53.9.149:8000)
// 3. Pada browser lokal di laptop ini: menggunakan http://localhost:8000
const getApiBaseUrl = () => {
  // Cek apakah ada environment variable publik/cloud eksplisit (bukan localhost)
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw && raw.trim() !== '' && !raw.includes('localhost') && !raw.includes('127.0.0.1')) {
    return raw.replace(/\/+$/, '');
  }

  const isNative = Capacitor.isNativePlatform() || 
    (typeof window !== 'undefined' && (
      window.location.protocol === 'capacitor:' || 
      window.Capacitor?.isNativePlatform?.() ||
      window.Capacitor?.platform === 'android'
    ));

  if (isNative) {
    return 'http://10.0.2.2:8000';
  }

  // Jika dibuka di browser lewat device lain (IP LAN Wi-Fi seperti 10.53.9.149 atau 192.168.x.x)
  if (typeof window !== 'undefined' && window.location.hostname) {
    const host = window.location.hostname;
    if (host !== 'localhost' && host !== '127.0.0.1') {
      return `${window.location.protocol}//${host}:8000`;
    }
  }

  if (raw && raw.trim() !== '') {
    return raw.replace(/\/+$/, '');
  }
  return 'http://localhost:8000';
};

export const API_BASE_URL = getApiBaseUrl();
