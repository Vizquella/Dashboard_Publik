import React from 'react';
import { Activity, Calendar } from 'lucide-react';

export default function SummaryPanel({ activeKpi, dateRangeStr }) {
  if (!activeKpi) return null;

  // Kalkulasi otomatis untuk persentase Gender
  const total = activeKpi.total || 0;
  const male = activeKpi.male || 0;
  const female = activeKpi.female || 0;
  
  const malePerc = total > 0 ? Math.round((male / total) * 100) : 0;
  const femalePerc = total > 0 ? Math.round((female / total) * 100) : 0;

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300">
      
      {/* Aksen Garis Warna Dinamis di Atas */}
      <div 
        className="absolute left-0 top-0 h-1.5 w-full transition-colors duration-300"
        style={{ backgroundColor: activeKpi.color }}
      ></div>

      <div className="flex flex-col justify-between gap-10 p-8 md:flex-row md:p-10 lg:gap-16">
        
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
              {Number(total).toLocaleString('id-ID')}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
            <Calendar size={14} className="text-slate-400" />
            <span>Periode: {dateRangeStr}</span>
          </div>
        </div>

        {/* KOLOM KANAN: Visualisasi Rasio Gender (Desain Baru) */}
        <div className="flex w-full flex-col justify-center md:w-[500px] xl:w-[600px]">
          
          {/* Bagian Atas: Bar Rasio */}
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Rasio Gender
              </span>
              <span className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm">
                {male > female ? 'Mayoritas Laki-laki' : female > male ? 'Mayoritas Perempuan' : 'Sebanding'}
              </span>
            </div>
            
            {/* Progress Bar Ganda */}
            <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100 shadow-inner">
              <div 
                className="bg-blue-400 transition-all duration-1000 ease-out" 
                style={{ width: `${malePerc}%` }}
              ></div>
              <div 
                className="bg-pink-400 transition-all duration-1000 ease-out" 
                style={{ width: `${femalePerc}%` }}
              ></div>
            </div>
            
            {/* Persentase */}
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-sm font-extrabold text-blue-500">{malePerc}%</span>
              <span className="text-sm font-extrabold text-pink-500">{femalePerc}%</span>
            </div>
          </div>

          {/* Bagian Bawah: Kartu Laki-laki & Perempuan (Side-by-side) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Kartu Laki-laki */}
            <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm ring-1 ring-slate-50 transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 3h5v5" />
                    <path d="m21 3-6.75 6.75" />
                    <circle cx="10" cy="14" r="6" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Laki - Laki</span>
              </div>
              <span className="text-3xl font-black tracking-tight text-slate-800">
                {Number(male).toLocaleString('id-ID')}
              </span>
            </div>

            {/* Kartu Perempuan */}
            <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm ring-1 ring-slate-50 transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M12 15v7" />
                    <path d="M9 19h6" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Perempuan</span>
              </div>
              <span className="text-3xl font-black tracking-tight text-slate-800">
                {Number(female).toLocaleString('id-ID')}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}