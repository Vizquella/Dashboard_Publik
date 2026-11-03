import React from 'react';
import { Activity, Calendar } from 'lucide-react';

export default function SummaryPanel({ activeKpi, dateRangeStr }) {
  if (!activeKpi) return null;

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300">
      
      {/* Aksen Garis Warna Dinamis di Atas */}
      <div 
        className="absolute left-0 top-0 h-1.5 w-full transition-colors duration-300"
        style={{ backgroundColor: activeKpi.color }}
      ></div>

      <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-10">
        
        {/* KOLOM KIRI: Info Utama & Total Kasus */}
        <div className="flex w-full flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Total Kasus Terdata
            </h2>
            <h3 
              className="mt-1 text-2xl font-black uppercase tracking-tight transition-colors duration-300"
              style={{ color: activeKpi.color }}
            >
              {activeKpi.name}
            </h3>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 ring-1 ring-slate-100 shadow-inner">
              <Activity size={32} style={{ color: activeKpi.color }} />
            </div>
            <span className="text-6xl font-black tracking-tighter text-slate-800 md:text-7xl">
              {Number(activeKpi.total || 0).toLocaleString('id-ID')}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
            <Calendar size={14} className="text-slate-400" />
            <span>Periode: {dateRangeStr}</span>
          </div>
        </div>

        {/* KOLOM TENGAH: Garis Cabang (Sembunyi di Mobile) */}
        <div className="hidden flex-col items-center justify-center px-4 opacity-40 md:flex">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" className="stroke-slate-400">
            {/* Garis Horizontal Masuk */}
            <path d="M0,60 L30,60" strokeWidth="2" strokeDasharray="4 4" />
            {/* Garis Vertikal */}
            <path d="M30,25 L30,95" strokeWidth="2" strokeDasharray="4 4" />
            {/* Garis ke Atas (Laki-laki) */}
            <path d="M30,25 L90,25" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M85,20 L92,25 L85,30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Garis ke Bawah (Perempuan) */}
            <path d="M30,95 L90,95" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M85,90 L92,95 L85,100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* KOLOM KANAN: Breakdown Gender */}
        <div className="flex w-full flex-1 flex-col gap-4 md:w-auto">
          
          {/* Sub-Kartu Laki-laki */}
          <div className="group flex items-center justify-between rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 3h5v5" />
                  <path d="m21 3-6.75 6.75" />
                  <circle cx="10" cy="14" r="6" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Laki - laki</span>
            </div>
            <span className="text-4xl font-extrabold tracking-tight text-slate-800">
              {Number(activeKpi.male || 0).toLocaleString('id-ID')}
            </span>
          </div>

          {/* Sub-Kartu Perempuan */}
          <div className="group flex items-center justify-between rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="9" r="6" />
                  <path d="M12 15v7" />
                  <path d="M9 19h6" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Perempuan</span>
            </div>
            <span className="text-4xl font-extrabold tracking-tight text-slate-800">
              {Number(activeKpi.female || 0).toLocaleString('id-ID')}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}