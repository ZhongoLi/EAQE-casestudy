import React, { useState } from 'react';
import { Menu, X, BookOpen, Scale, GitMerge, Building, Gavel, Printer } from 'lucide-react';

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
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Container - Added ID for print hiding */}
      <div id="app-sidebar" className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out z-40 w-64 bg-primary text-white flex flex-col shadow-xl md:static md:h-screen md:sticky md:top-0`}>
        <div className="p-6 border-b border-primary-light hidden md:block">
          <h1 className="text-xl font-bold leading-tight">地產代理資格考試<br/><span className="text-blue-300 text-base">案例題深度攻略</span></h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto mt-14 md:mt-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-primary-light transition-colors text-slate-100"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-primary-light space-y-3">
           <button 
             onClick={handlePrint}
             className="w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-2 px-4 rounded hover:bg-blue-50 transition-colors shadow-sm"
           >
             <Printer size={16} />
             導出 PDF / 列印
           </button>
           <div className="text-xs text-blue-200 text-center">
             EAQE / SQE 備考精華
           </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};