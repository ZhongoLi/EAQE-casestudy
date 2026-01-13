import React, { useRef, useState } from 'react';
import { Camera, Check, Loader2, Settings2, Minus, Plus } from 'lucide-react';
import { toBlob } from 'html-to-image';

interface ExportableSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  label?: string;
}

// 預設寬度選項
const WIDTH_OPTIONS = [
  { label: '窄', value: 600 },
  { label: '標準', value: 800 },
  { label: '寬', value: 1000 },
  { label: '超寬', value: 1200 },
];

export const ExportableSection: React.FC<ExportableSectionProps> = ({ children, className = "", label = "複製圖片" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isCopying, setIsCopying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [exportWidth, setExportWidth] = useState(800); // 預設 800px

  const handleCopyImage = async () => {
    const element = sectionRef.current;
    if (!element) return;

    setIsCopying(true);

    try {
      // 獲取元素的實際尺寸
      const rect = element.getBoundingClientRect();
      const scale = exportWidth / rect.width;

      // 使用 html-to-image 生成 Blob，應用指定寬度
      const blob = await toBlob(element, {
        quality: 1,
        backgroundColor: '#ffffff',
        // 設置畫布尺寸以確保完整捕獲
        canvasWidth: exportWidth,
        canvasHeight: Math.ceil(rect.height * scale),
        // 使用像素比來提高清晰度
        pixelRatio: 2,
        // 忽略導出按鈕和設定面板
        filter: (node) => {
          return !node.classList?.contains('export-btn') && !node.classList?.contains('export-controls');
        },
        // 強制樣式覆蓋，確保截圖乾淨
        style: {
          transform: 'none',
          boxShadow: 'none',
          // 不強制設置 width 和 padding，保留原始佈局
          boxSizing: 'border-box',
          overflow: 'visible',
          // 確保文字渲染清晰
          fontFeatureSettings: '"kern" 1',
          textRendering: 'geometricPrecision',
          ['WebkitFontSmoothing' as any]: 'antialiased',
        }
      });

      if (!blob) throw new Error('Blob generation failed');

      // 寫入剪貼板
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      
      setIsSuccess(true);
      setShowSettings(false);
      setTimeout(() => setIsSuccess(false), 2000);

    } catch (error) {
      console.error('Screenshot failed:', error);
      alert('生成圖片失敗，請重試或檢查瀏覽器權限。');
    } finally {
      setIsCopying(false);
    }
  };

  const adjustWidth = (delta: number) => {
    setExportWidth(prev => Math.max(400, Math.min(1600, prev + delta)));
  };

  return (
    <div className={`relative group ${className}`}>
      {/* 導出按鈕容器 */}
      <div className="absolute -top-3 right-4 z-20 export-btn opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2">
        {/* 設定按鈕 */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-full bg-slate-600 text-white hover:bg-slate-500 transition-colors shadow-md"
          title="調整導出寬度"
        >
          <Settings2 size={14} />
        </button>

        {/* 導出按鈕 */}
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

      {/* 寬度設定面板 */}
      {showSettings && (
        <div className="absolute -top-16 right-4 z-30 export-controls bg-white rounded-lg shadow-xl border border-slate-200 p-3 flex items-center gap-3">
          <span className="text-xs text-slate-500">導出寬度:</span>
          
          {/* 快速選項 */}
          <div className="flex gap-1">
            {WIDTH_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setExportWidth(opt.value)}
                className={`px-2 py-1 text-xs rounded ${
                  exportWidth === opt.value 
                    ? 'bg-primary text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* 微調按鈕 */}
          <div className="flex items-center gap-1 border-l pl-2 ml-1">
            <button
              onClick={() => adjustWidth(-50)}
              className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
              title="減少寬度"
            >
              <Minus size={12} />
            </button>
            <span className="text-xs text-slate-700 w-12 text-center">{exportWidth}px</span>
            <button
              onClick={() => adjustWidth(50)}
              className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
              title="增加寬度"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>
      )}

      <div ref={sectionRef} className="p-4 bg-white rounded-xl">
        {children}
      </div>
    </div>
  );
};