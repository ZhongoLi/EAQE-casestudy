import React from 'react';
import { Part1 } from './sections/Part1';
import { Part2Principles } from './sections/Part2Principles';
import { Part2Process } from './sections/Part2Process';
import { Part3 } from './sections/Part3';
import { Part4 } from './sections/Part4';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <main id="main-content" className="w-full max-w-4xl mx-auto p-8 md:p-16">
        
        <header className="mb-12 text-center border-b pb-8 border-slate-100">
          <div className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide border border-primary/10">
            備考筆記 Beta 1.0 (修訂版)
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            地產代理資格考試<br/>
            <span className="text-2xl md:text-3xl font-medium text-slate-600 mt-2 block">個案分析重點梳理</span>
          </h1>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mt-4">
            本內容旨在梳理常見案例題的核心考點與法規邏輯，供考生複習參考。<br/>
            每個模塊右上角均有「📷 複製」按鈕，方便您製作獨立的學習卡片。
          </p>
        </header>

        <div className="space-y-16 pb-20">
          <Part1 />
          <Part2Principles />
          <Part2Process />
          <Part3 />
          <Part4 />
        </div>
        
        <footer className="text-center text-slate-400 text-sm border-t pt-8 mt-12 pb-12">
          <p>內部教研資料 • 僅供學員使用</p>
          <p className="mt-2 text-xs text-slate-300">Last Updated: 2025</p>
        </footer>
      </main>
    </div>
  );
};

export default App;