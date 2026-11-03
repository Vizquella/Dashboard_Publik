import React from "react";
import { Hospital, Calendar } from 'lucide-react';

export default function HeaderComp({ title, subtitle, lastUpdate }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm">
              <Hospital size={20} />
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {title || 'Dashboard Surveilans Kasus Penyakit'}
            </h1>
          </div>
            <p className="mt-1 text-sm text-slate-500">
              {subtitle || 'Rekam Medik Elektronik Puskesmas'}
            </p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600 sm:self-center">
          <Calendar size={14} />
          <span>Pembaruan: {lastUpdate || '-'}</span>
        </div>
      </div>
    </header>
  );
}