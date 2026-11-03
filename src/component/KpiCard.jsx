import React from 'react';
import { Activity } from 'lucide-react';

export default function KpiCard({ item, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
        isSelected ? 'border-2 ring-2 ring-offset-1' : 'border-slate-200'
      }`}
      style={{
        borderColor: isSelected ? item.color : undefined,
        outlineColor: isSelected ? item.color : undefined
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {item.name}
        </span>
        <Activity size={16} style={{ color: item.color }} />
      </div>

      <div className="mt-3 text-3xl font-extrabold text-slate-900">
        {Number(item.total || 0).toLocaleString('id-ID')}
      </div>

      {/* Bagian Laki-Laki (Mars) & Perempuan (Venus) */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-600 font-medium">
        {/* Simbol Mars (Laki-laki) */}
        <span className="flex items-center gap-1.5 text-blue-600">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="15" 
            height="15" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M16 3h5v5" />
            <path d="m21 3-6.75 6.75" />
            <circle cx="10" cy="14" r="6" />
          </svg>
          <span className="text-slate-700">{Number(item.male || 0).toLocaleString('id-ID')}</span>
        </span>

        {/* Simbol Venus (Perempuan) */}
        <span className="flex items-center gap-1.5 text-rose-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="15" 
            height="15" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="9" r="6" />
            <path d="M12 15v7" />
            <path d="M9 19h6" />
          </svg>
          <span className="text-slate-700">{Number(item.female || 0).toLocaleString('id-ID')}</span>
        </span>
      </div>
    </div>
  );
}