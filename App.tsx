import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Part1 } from './sections/Part1';
import { Part2Principles } from './sections/Part2Principles';
import { Part2Process } from './sections/Part2Process';
import { Part3 } from './sections/Part3';
import { Part4 } from './sections/Part4';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar />
      
      {/* Added ID for print CSS to force full width */}
      <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-10 mt-16 md:mt-0">
        <header className="mb-10 md:mb-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">案例題核心考點精講</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            本攻略專為地產代理資格考試 (EAQE) 及營業員資格考試 (SQE) 考生設計。
            匯集官方案例題核心考點、法規解讀及高頻陷阱。請配合右側/下方目錄閱讀。
          </p>
        </header>

        <div className="space-y-16 md:space-y-24 pb-20">
          <Part1 />
          <Part2Principles />
          <Part2Process />
          <Part3 />
          <Part4 />
        </div>
        
        <footer className="text-center text-slate-400 text-sm border-t pt-8 mt-12">
          <p>備考資料僅供參考，請以官方最新法例及監管局指引為準。</p>
        </footer>
      </main>
    </div>
  );
};

export default App;