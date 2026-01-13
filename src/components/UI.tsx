import React from 'react';
import { AlertTriangle, Info, Gavel } from 'lucide-react';

export const SectionHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-8 border-b-2 border-primary/20 pb-4">
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="text-primary">{icon}</div>}
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
  </div>
);

export const SubSectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center before:content-[''] before:block before:w-1.5 before:h-6 before:bg-primary before:mr-3 before:rounded-full">
    {title}
  </h3>
);

export const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md border-l-4 border-primary p-6 mb-6">
    <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
      <Info size={20} />
      {title}
    </h4>
    <div className="text-slate-700 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export const LawCard: React.FC<{ title?: string; children: React.ReactNode }> = ({ title = "法律與規例依據", children }) => (
  <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 mb-4">
    <h4 className="text-md font-bold text-slate-800 mb-2 flex items-center gap-2">
      <Gavel size={18} className="text-slate-600" />
      {title}
    </h4>
    <div className="text-slate-600 text-sm space-y-1">
      {children}
    </div>
  </div>
);

export const TrapCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-red-50 rounded-lg border border-red-100 p-5 mb-4">
    <h4 className="text-red-800 font-bold mb-2 flex items-center gap-2">
      <AlertTriangle size={18} />
      常見陷阱與案例題眼
    </h4>
    <div className="text-red-700 text-sm space-y-2">
      {children}
    </div>
  </div>
);

export const KeyPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <span className="font-bold text-primary-dark block mb-1">{title}</span>
    <div className="text-slate-600 pl-4 border-l border-slate-300">
      {children}
    </div>
  </div>
);

export const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1 text-slate-700">
    {items.map((item, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);