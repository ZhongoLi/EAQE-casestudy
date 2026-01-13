import React, { useState } from 'react';
import { Menu, X, BookOpen, Scale, GitMerge, Building, Gavel, FileDown } from 'lucide-react';

const navItems = [
  { id: 'part1', label: '考綱與題型', icon: <BookOpen size={18} /> },
  { id: 'part2-principles', label: '核心原則', icon: <Scale size={18} /> },
  { id: 'part2-process', label: '交易流程五步', icon: <GitMerge size={18} /> },
  { id: 'part3', label: '專題深度解析', icon: <Building size={18} /> },
  { id: 'part4', label: '違規與處分', icon: <Gavel size={18} /> },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-primary text-white p-4 fixed top-0 w-full z-50 flex justify-between items-center shadow-md">
        <span className="font-bold text-lg">地產代理考試攻略</span>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside 
        id="app-sidebar" 
        className={`
          fixed inset-y-0 left-0 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition duration-200 ease-in-out z-40 
          w-64 bg-primary text-white flex flex-col shadow-xl 
          md:static md:h-screen md:sticky md:top-0
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 hidden md:block">
          <h1 className="text-xl font-bold leading-tight">
            地產代理資格考試
          </h1>
          <p className="text-blue-200 text-sm mt-1">案例題深度攻略</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto mt-14 md:mt-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-colors text-slate-100 group"
            >
              <span className="text-blue-200 group-hover:text-white transition-colors">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        {/* Footer with PDF Export */}
        <div className="p-4 border-t border-white/10 space-y-3">
           <button 
             onClick={handlePrint}
             className="w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
           >
             <FileDown size={18} />
             導出 PDF / 列印
           </button>
           <div className="text-xs text-blue-200 text-center">
             EAQE / SQE 備考精華
           </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};