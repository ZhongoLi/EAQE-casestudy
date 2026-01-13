import React, { useRef, useState } from 'react';
import { Camera, Check, Loader2 } from 'lucide-react';

interface ExportableSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  label?: string;
}

export const ExportableSection: React.FC<ExportableSectionProps> = ({ children, className = "", label = "複製圖片" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isCopying, setIsCopying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyImage = async () => {
    const element = sectionRef.current;
    if (!element) return;
    
    const html2canvas = (window as any).html2canvas;
    if (!html2canvas) {
        alert("截圖功能組件尚未加載完成，請刷新頁面再試。");
        return;
    }

    setIsCopying(true);

    // 1. 獲取當前精確的寬高，防止截圖時因寬度變化導致文字換行從而錯位
    const originalWidth = element.offsetWidth;
    const originalHeight = element.offsetHeight;

    try {
      const canvas = await html2canvas(element, {
        scale: 3, // 高清縮放
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
        // 2. 關鍵：鎖定畫布尺寸與當前元素完全一致
        width: originalWidth,
        height: originalHeight,
        // 確保虛擬視窗足夠大，避免響應式佈局觸發移動端樣式
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
        onclone: (clonedDoc: Document) => {
            const clonedBody = clonedDoc.body;

            // 3. 全局禁用動畫和過渡，防止截圖時元素正在移動
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              * { 
                transition: none !important; 
                animation: none !important; 
                transform: none !important;
                -webkit-font-smoothing: antialiased;
                text-rendering: geometricPrecision;
              }
            `;
            clonedBody.appendChild(style);

            // 4. 隱藏按鈕
            const btn = clonedDoc.querySelector('.export-btn');
            if (btn) (btn as HTMLElement).style.display = 'none';

            // 5. 針對表格的深度修復
            // 強制表格邊框合併，避免 1px 錯位
            const tables = clonedDoc.querySelectorAll('table');
            tables.forEach((table: HTMLElement) => {
                table.style.borderCollapse = 'collapse';
                table.style.borderSpacing = '0';
                table.style.width = '100%';
                table.style.backgroundColor = '#ffffff';
            });

            // 6. 移除由於 Tailwind overflow-x-auto 帶來的潛在滾動條或佈局限制
            // 找到所有 overflow 容器並強制其展開
            const wrappers = clonedDoc.querySelectorAll('.overflow-x-auto, .overflow-y-auto, .overflow-hidden');
            wrappers.forEach((el: HTMLElement) => {
                el.style.overflow = 'visible';
                el.style.boxShadow = 'none';
                // 移除圓角，圓角是表格截圖產生鋸齒或斷裂的主要原因
                el.style.borderRadius = '0';
                // 強制寬度繼承，防止壓縮
                el.style.width = '100%';
                el.style.maxWidth = 'none';
                el.style.display = 'block';
            });

            // 移除所有圓角，確保線條直觀對齊
            const rounded = clonedDoc.querySelectorAll('[class*="rounded"]');
            rounded.forEach((el: HTMLElement) => {
                el.style.borderRadius = '0';
            });
        }
      });

      canvas.toBlob(async (blob: Blob | null) => {
        if (!blob) throw new Error('Canvas is empty');
        try {
            const item = new ClipboardItem({ 'image/png': blob });
            await navigator.clipboard.write([item]);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 2000);
        } catch (err) {
            console.error('Clipboard write failed', err);
            alert('瀏覽器阻止了寫入剪貼板，請使用右鍵另存圖片');
        } finally {
            setIsCopying(false);
        }
      }, 'image/png');

    } catch (error) {
      console.error('Screenshot failed:', error);
      setIsCopying(false);
      alert('生成圖片失敗');
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -top-3 right-4 z-20 export-btn opacity-90 hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopyImage}
          disabled={isCopying}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-white/20
            transition-all duration-200
            ${isSuccess 
                ? 'bg-green-600 text-white' 
                : 'bg-primary text-white hover:bg-primary-light hover:shadow-xl'
            }
          `}
        >
          {isCopying ? (
            <Loader2 size={14} className="animate-spin" />
          ) : isSuccess ? (
            <Check size={14} />
          ) : (
            <Camera size={14} />
          )}
          {isSuccess ? '已複製到剪貼板！' : isCopying ? '生成中...' : label}
        </button>
      </div>

      <div ref={sectionRef} className="p-1 bg-white rounded-xl">
        {children}
      </div>
    </div>
  );
};