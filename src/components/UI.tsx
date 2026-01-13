import React from 'react';
import { AlertTriangle, Info, Gavel } from 'lucide-react';

export const SectionHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-8 border-b-2 border-primary/20 pb-4">
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="text-primary">{icon}</div>}
      <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-600 text-base md:text-lg">{subtitle}</p>}
  </div>
);

export const SubSectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-lg md:text-xl font-bold text-primary mt-8 mb-4 flex items-center before:content-[''] before:block before:w-1.5 before:h-6 before:bg-primary before:mr-3 before:rounded-full">
    {title}
  </h3>
);

export const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-lg border border-slate-200 p-5 md:p-6 mb-6">
    <h4 className="text-base md:text-lg font-bold text-slate-800 mb-3">
      {title}
    </h4>
    <div className="text-slate-700 text-sm leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export const LawCard: React.FC<{ title?: string; children: React.ReactNode }> = ({ title = "法律與規例依據", children }) => (
  <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 md:p-5 mb-4">
    <h4 className="text-sm md:text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
      <Gavel size={18} className="text-slate-600" />
      {title}
    </h4>
    <div className="text-slate-600 text-sm space-y-1">
      {children}
    </div>
  </div>
);

export const TrapCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-red-50 rounded-lg border border-red-100 p-4 md:p-5 mb-4">
    <h4 className="text-red-800 font-bold text-sm md:text-base mb-2 flex items-center gap-2">
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
    <span className="font-bold text-primary-dark text-sm md:text-base block mb-1">{title}</span>
    <div className="text-slate-600 text-sm pl-4 border-l border-slate-300">
      {children}
    </div>
  </div>
);

// 考點標題組件 - 用於統一「考點N」的樣式
export const ExamPoint: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="mb-5">
    <h5 className="text-sm md:text-base font-bold text-primary-dark mb-2">
      考點{number}：{title}
    </h5>
    <div className="text-sm text-slate-700 space-y-2">
      {children}
    </div>
  </div>
);

// 列表組件 - 確保統一的字體大小
export const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
    {items.map((item, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

// 有序列表組件
export const OrderedList: React.FC<{ items: string[] }> = ({ items }) => (
  <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-700">
    {items.map((item, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ol>
);